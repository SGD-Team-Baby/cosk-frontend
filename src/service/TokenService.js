
export function getToken(){
    return sessionStorage.getItem("token");
}

export function setToken(token){
    sessionStorage.setItem("token", token);
}
export function removeToken(){
    sessionStorage.removeItem("token")
}

export function setId(id){
    sessionStorage.setItem("id", id)
}

export function remnoveId(){
    sessionStorage.removeItem("id")
}

export function getId(){
    return sessionStorage.getItem("id")
}
