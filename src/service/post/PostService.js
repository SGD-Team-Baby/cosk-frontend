import {useState} from "react";

export default function useGetPost({postId}) {

    //여기에 api 로직 추가

    return (
        {
            username: "YSM",
            title: "이건 좀 너무한거 아니냐고 야발",
            favorites: "4",
            time: "2022년 8월 5일 금요일 오후 11:58",
            contents: [
                {
                    type: "code",
                    text: "AAAAAA",
                    options: "kotlin"
                }
            ],
            comments: [
                {
                    username: "asdf",
                    time: "2022년 8월 5일 금요일 오후 11:59",
                    content: "asdfasdfasfasdfasdfasdfasdf",
                    comments: [
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        }
                    ]
                },
                {
                    username: "asdf",
                    time: "2022년 8월 5일 금요일 오후 11:59",
                    content: "asdfasdfasfasdfasdfasdfasdf",
                    comments: [
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        },
                        {
                            username: "asdf",
                            time: "2022년 8월 5일 금요일 오후 11:59",
                            content: "asdfasdfasfasdfasdfasdfasdf",
                            comments: []
                        }
                    ]
                }
            ]
        }
    )
}