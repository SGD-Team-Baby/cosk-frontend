import instance from "../../ConstantValue";
import ImageUpload from "./ImageUpload";
export default function (post, parentId){
    const parent = parentId || null;
    const token = "aaaaa";
    let loading = true;
    let error = false;
    let result = undefined;
    if(loading) {
        instance.post("/post/create", {
            'parent': parent,
            'title': post.title,
            'contents': post.contents
        }, {headers: {'Authorization': token}})
            .then(function (response) {
                loading = false;
                result = response.data;
            })
            .catch(function (error) {
                loading = false;
                error = true;
                result = error.response.data;
            })
    }

    return result;
}