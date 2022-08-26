import {isLogined} from "../user/LoginService";
import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
export default function (commentId, value) {
    if(isLogined()){
        const token = getToken();
        instance.post("/post/comment/update", {id:commentId, text:value}, {headers:{'Authorization': "Bearer " + token}})
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error){
                console.log(error.response)
            })
    }
}