import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
import {imageUpload} from "../image/ImageUpload";

export default async function (parentId, title, post, tags){
    const parent = parentId===(-1)?null:parentId;
    const token = getToken();
    let loading = true;
    let error = false;

    await sendPost({
        parent:parent,
        title:title,
        contents:await extractContent(post),
        tags:extractTag(tags)
    }, parent);
}

async function extractContent(posts){
    const result = (await Promise.all(
        posts.map(async (item) => {
            const dummy = {
                text:"",
                type:"",
                subtitle:"",
                options:""
            }
            if (item.type === 'img') {
                dummy.text = await imageUpload(item.options.imgblob)
                dummy.options = item.content;
                dummy.type= "image"
            } else if (item.type === 'code' || item.type === 'text') {
                dummy.text = item.content
                dummy.type= item.type
            }

            return dummy;
        })
    ))
    return result;
}

function extractTag(tags){
    tags = tags.trim();
    if(tags === "")
        return [];
    else
        return (tags.split(",").map((item) => (
            item.trim()
        )));

}

async function sendPost(post, parentId){
    const token = getToken();
    await instance.post("/post/create", JSON.stringify({
        'parent': post.parent,
        'title': post.title,
        'contents': post.contents,
        'tags':post.tags
    }), {headers: {'Authorization': "Bearer " + token, 'content-type':' application/json'}})
        .then(function (response) {
            document.location.href=`/post/${parentId==null?response.data.id:parentId}`
        })
        .catch(function(error){

        })

}

