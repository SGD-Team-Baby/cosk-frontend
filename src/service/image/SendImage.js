import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
import {isLogined} from "../user/LoginService";

export default function sendImage({email, image}) {
    if(!isLogined())
        document.location.href = "/login"
    const token = getToken();
    console.log({email:email, url:image})
    instance.post('/post/share', {email:email, url:image}, {headers:{'Authorization': "Bearer " + token}})
        .then(function (response) {
            // console.log(response.data.status)
        })
        .catch(function (error) {
            // console.log(error.response)
        })

}