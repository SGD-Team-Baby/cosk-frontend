import instance from "../../ConstantValue";
import ImageUpload from "./ImageUpload";
import {getToken} from "../TokenService";

export default function (parentId, title, post, tags){
    const parent = parentId===(-1)?null:parentId;
    const token = getToken();
    let loading = true;
    let error = false;
    let result = undefined;

    console.log({
        'parent': parent,
        'title': title,
        'contents': post,
        'tags':tags
    })

    if(loading) {
        instance.post("/post/create", {
            'parent': parent,
            'title': title,
            'contents': post,
            'tags':tags
        }, {headers: {'Authorization': "Bearer" + token}})
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