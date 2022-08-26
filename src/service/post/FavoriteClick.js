import {useEffect, useState} from "react";
import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
import {isLogined} from "../user/LoginService";

export default function clickFavorite({postId}) {
    if(isLogined()) {
        const token = getToken()
        instance.post('post/favorite', {'post': postId}, {
            headers: {'Authorization': "Bearer " + token},
            validateStatus: function (status) {
                return status===200 || status === 205
            },})
            .then((function (response) {
                document.location.href = `/post/${postId}`
                if(response.status ===200){
                    return {'clicked': true}
                }
                else if(response.status ===205){
                    return {'clicked': false}
                }
            }))
            .catch((function (error) {

            }))


    }
}