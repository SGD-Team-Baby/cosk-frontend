import instance from "../../ConstantValue";
import {getToken} from "../TokenService";

export default function (parentId, title, post, tags){
    const parent = parentId===(-1)?null:parentId;
    const token = getToken();
    let loading = true;
    let error = false;
    let result = undefined;
    console.log(post)

    console.log(JSON.stringify({
        'parent': parent,
        'title': title,
        'contents':holy(post),
        'tags':tags.split(",")
    }))

    if(loading) {
        instance.post("/post/create", JSON.stringify({
            'parent': parent,
            'title': title,
            'contents': holy(post),
            'tags':tags.split(",")
        }), {headers: {'Authorization': "Bearer " + token, 'content-type':' application/json'}})
            .then(function (response) {
                loading = false;
            })
            .catch(function (error) {
                loading = false;
                error = true;
            })
    }

    return result;
}

function holy(contents){
    return contents.map((item) => (

        {
            type:item['type'],
            text:item['content'],
            subtitle:'',
            options:item['type']==="text"?(""):item['options'].language
        }
    ));
}