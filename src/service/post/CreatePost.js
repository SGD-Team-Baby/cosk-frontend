import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
import {imageUpload} from "../image/ImageUpload";

export default async function (parentId, title, post, tags){
    const parent = parentId===(-1)?null:parentId;
    const token = getToken();
    let loading = true;
    let error = false;
    // console.log(extractPost(["", "", "a"]));

    // console.log(imageUpload())
    await sendPost({
        parent:parent,
        title:title,
        contents:await extractContent(post),
        tags:extractTag(tags)
    });
}

async function extractContent(posts){
    console.log("extractContent")
    return await posts.map(async (item) => {
        if (item.type === 'img') {
            item.text = await imageUpload(item.options.imgblob).then(function(){
                console.log("2");
            })
            item.options = item.content;
        }
        else if(item.type === 'code' || item.type === 'text'){
            item.text = item.content
        }
    })
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

async function sendPost(post){
    const token = getToken();
    console.log(post)
    instance.post("/post/create", JSON.stringify({
        'parent': post.parent,
        'title': post.title,
        'contents': post.contents,
        'tags':post.tags
    }), {headers: {'Authorization': "Bearer " + token, 'content-type':' application/json'}})
        .catch(function(error){
            console.log(error.response)
        })
}

