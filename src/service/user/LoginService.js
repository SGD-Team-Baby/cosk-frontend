import instance from "../../ConstantValue";
import {getToken, removeToken, setId, setToken} from "../TokenService";

export async function login(email, password) {
    return instance.post("/account/login",
        {
            'email': email,
            'password': password,

        },
    )

        .then(function (response) {
            // console.log(response)
            // console.log(response.status)
            setToken(response.data.access_token);
            console.log(response.data.user.id)
            setId(response.data.user.id);
        });

}

export function logout(){
    removeToken();
    document.location.href = "/"
}

export function isLogined(){
    return getToken() !== null;
}