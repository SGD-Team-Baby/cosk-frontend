import {useEffect, useState} from "react";
import instance from "../../ConstantValue";

export default function useGetPostList({page, postListName}) {
    const [posts, setPosts] = useState([])
    const [total, setTotal] = useState(0)
    useEffect(() => {
        instance.get("/post/list", {})
            .then(function (response){
                // console.log(response.data);
                setPosts(response.data.data);
                setTotal(response.data.total)
            })

    }, [])

    return {posts: posts, total: total}
}