import instance from "../../ConstantValue";
import { removeToken, setToken} from "../TokenService";

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

        });

}

export function logout(){
    removeToken();

}

