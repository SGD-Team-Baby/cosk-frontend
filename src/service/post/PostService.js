import {useEffect, useState} from "react";
import instance from "../../ConstantValue";
import {getToken} from "../TokenService";
import {isLogined} from "../user/LoginService";
export default function useGetPost(postId) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = isLogined()?"Bearer " + getToken():"";


    useEffect(() => {
        let completed = false;
        async function get(){
            const result = await instance.get(`/post/info/${postId}`, { headers: {'Authorization' : token}})
                .then(function (response){
                    return response
                })
                .catch(function (error){
                    setError(true)
                    return error.response;
                });

            if(!completed) {
                setLoading(false);
                setData(result.data);
            }
        }
        get();

        return () => {completed = true}
    }, []);
    //여기에 api 로직 추가

    if(!loading && !error){
        const user = data.user;
        return (
            {
                username:user.name,
                child:data.childs,
                title:data.title,
                favorites: data.favorite,
                time: data.time,
                visit: data.visit,
                contents: data.contents,
                comments: data.comments
            }
        );
    }
    return (
        {
            username: "YSM",
            title: "불러오는 중입니다.",
            favorites: "4",
            time: "2022년 8월 5일 금요일 오후 11:58",
            contents: [
                {
                    type: "text",
                    text: "불러오는 중입니다.",
                    options: "kotlin"
                }
            ],
            comments: []
        }
    )
}