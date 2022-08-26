import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
import {isLogined} from "../user/LoginService";
export default function (postId) {
    if(isLogined()) {
        const token = getToken();
        instance.post('/post/delete', {id:postId}, {headers: {'Authorization': "Bearer " + token}})
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error){
                console.log(error.response)
            })
    }
}