import instance from "../../ConstantValue";

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
            saveToken(response.data.access_token);

        });

}

export function logout(){
    sessionStorage.removeItem("token");
}

export function getToken(){
    sessionStorage.getItem("token");
}
function saveToken(token){
    sessionStorage.setItem("token", token);
}

