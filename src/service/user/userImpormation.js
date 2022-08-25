import {useEffect, useState} from "react";
import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
export default function useGetUserInpormation() {
    const [user,setUser] = useState({id:0, name:"",question:0, answer:0})
    const token = getToken();

    useEffect(() => {

        instance.get(`/account/user`, {headers: {'Authorization': "Bearer " + token}})
            .then(function (response){
                setUser(response.data);
            })

    }, [])

    return {user:user}
}