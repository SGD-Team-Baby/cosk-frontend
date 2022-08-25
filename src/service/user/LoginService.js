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
            setToken(response.data.access_token);
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