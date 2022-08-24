import instance from "../../ConstantValue";
import {getToken} from "../TokenService";

export async function imageUpload(image){
    let formData = new FormData();
    let file = new File([image], image.name);

    formData.append('file', image)
    console.log("ImageUpload")
    const response = await instance.post("/image/upload", formData, {headers:{"Authorization":"Bearer "+ getToken(), 'Content-Type': 'multipart/form-data'}})
    console.log(response.data)
    return response.data
    //     .then(function (response){
    //         console.log(response);
    //         console.log("CLEAR")
    //         console.log(response.data)
    //         return response.data
    // })
    //     .catch(function(error){
    //         console.log("ERROR")
    //         console.log(error.response.data)
    // })
}