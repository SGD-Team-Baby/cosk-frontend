import instance from "../../ConstantValue";
import {getToken} from "../TokenService";

export async function imageUpload(image){
    let formData = new FormData();
    let file = new File([image], image.name);

    formData.append('file', image)
    const response = await instance.post("/image/upload", formData, {headers:{"Authorization":"Bearer "+ getToken(), 'Content-Type': 'multipart/form-data'}})
    return response.data
}