import instance from "../../ConstantValue";

export async function login(email, password) {
    return instance.post("/account/login",
        {
            'email': email,
            'password': password,

        },
    )

        .then(function (response) {
            console.log(response.state())
            saveToken(response.data.access_token);
        })
        .catch(function (error){
            console.log(error.response.state)
        })


}

export function logout(){
    sessionStorage.removeItem("token");
}
function saveToken(token){
    sessionStorage.setItem("token", token);
}