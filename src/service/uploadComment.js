import instance from "../ConstantValue";
import {isLogined} from "./user/LoginService";
import {getToken} from "./TokenService";

export default function (id, text) {
    const token = isLogined()?"Bearer " + getToken():""

    instance.post('post/comment/create', { 'post' : id, 'text' : text },{headers:{Authorization:token}})
        .then(function (response) {
        })
}