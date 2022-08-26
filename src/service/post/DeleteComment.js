import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
import {isLogined} from "../user/LoginService";
export default function (commentId) {
    if(isLogined()) {
        const token = getToken();
        instance.post('/post/comment/delete', {id:commentId}, {headers: {'Authorization': "Bearer " + token}})
            .then(function (response) {

            })
            .catch(function (error){

            })
    }
}