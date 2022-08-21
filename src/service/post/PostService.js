import {useEffect, useState} from "react";
import instance from "../../ConstantValue";
export default function useGetPost(postId) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = "AAAAAA";

    useEffect(() => {
        let completed = false;
        async function get(){
            const result = await instance.get(`/post/info/${postId}`, { headers: {'Authentication' : `Bearer ${token}`}})
                .then(function (response){
                    return response
                })
                .catch(function (error){
                    console.log("ERROR");
                    setError(true)
                    console.log(error);
                    return error.response;
                    // ERROR
                });

            if(!completed) {
                setLoading(false);
                setData(result.data);
                console.log(data);
            }
        }
        get();

        return () => {completed = true}
    }, []);
    //여기에 api 로직 추가

    if(!loading && !error){
        const user = data.user;
        // console.log(postId);
        // console.log(user);
        // console.log(data.contents);
        // console.log(data.favorite);
        return (
            {
                username:user.name,
                tags:data.tags,
                title:data.title,
                favorites: data.favorite,
                time: data.time,
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