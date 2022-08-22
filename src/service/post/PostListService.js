import {useEffect, useState} from "react";

export default function useGetPostList({page, postListName}) {
    const [posts, setPosts] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setPosts(
            [
                {
                    id: 1,
                    user: {
                        id: 1,
                        badges: "🌄 🧑🏻‍💻",
                        username: "tmdals099",
                        name: "YSM",
                        email: "tmdals099@gmail.com",
                        question: 9,
                        answer: 58,
                        followers: 17,
                        following: 14,
                        organization: "Koreatech",
                        links: ["https://blog.ysmstudio.dev", "https://seungmin.dev"]
                    },
                    title: "코틀린은 신이야",
                    contents: [],
                    favorite: 10,
                    visit: 4,
                    time: "대충시간2022년머시기",
                    tags: ["kotlin", "ez"]
                },
                {
                    id: 1,
                    user: {
                        id: 1,
                        badges: "🌄 🧑🏻‍💻",
                        username: "tmdals099",
                        name: "YSM",
                        email: "tmdals099@gmail.com",
                        question: 9,
                        answer: 58,
                        followers: 17,
                        following: 14,
                        organization: "Koreatech",
                        links: ["https://blog.ysmstudio.dev", "https://seungmin.dev"]
                    },
                    title: "코틀린은 신이야",
                    contents: [],
                    favorite: 10,
                    visit: 4,
                    time: "대충시간2022년머시기",
                    tags: ["kotlin", "ez"]
                },
                {
                    id: 1,
                    user: {
                        id: 1,
                        badges: "🌄 🧑🏻‍💻",
                        username: "tmdals099",
                        name: "YSM",
                        email: "tmdals099@gmail.com",
                        question: 9,
                        answer: 58,
                        followers: 17,
                        following: 14,
                        organization: "Koreatech",
                        links: ["https://blog.ysmstudio.dev", "https://seungmin.dev"]
                    },
                    title: "코틀린은 신이야",
                    contents: [],
                    favorite: 10,
                    visit: 4,
                    time: "대충시간2022년머시기",
                    tags: ["kotlin", "ez"]
                }
            ]
        )
        setTotal(234)
    }, [])

    return {posts: posts, total: total}
}