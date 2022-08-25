import instance from "../../ConstantValue";

export default async function (image) {
    let loading = true;
    let error = false;
    let result = ""
    const formData = new FormData();
    formData.append('files', image);
    if(loading) {
        await instance.post("/image/upload", formData, {headers: {'post':5}})
            .then(function (response) {

                loading = false;
                result = response.data
            })
            .catch(function (error) {
                loading = false;
                error = true;
                result = error.response.data
            })
    }
    return result;
}