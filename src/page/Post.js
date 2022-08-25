import React from "react";
import {Container, Image, Stack} from "react-bootstrap";
import PostInfo from "../component/post/blocks/normal/PostInfo";
import MarkdownTextBlock from "../component/post/blocks/normal/MarkdownTextBlock";
import NavBar from "../component/NavBar";
import SignupForm from "../component/signup/SignupForm";
import ImageBlock from "../component/post/blocks/normal/ImageBlock";
import CodeBlock from "../component/post/blocks/normal/CodeBlock";
import useGetPost from "../service/post/PostService";
import Comment from "../component/post/comment/Comment";
import {useParams} from "react-router-dom";
import PostContent from "../component/post/blocks/PostContent";
import uploadComment from "../service/uploadComment";


/**
 * title="asdf"
 * contents
 * @param props
 * @constructor
 */
export default function Post() {

    const params = useParams()
    const post = useGetPost(params.id)
    console.log("POST")
    console.log(post)
    return (
        <div>
            <NavBar
                transparent={false}
                lightText={false}
            />

            <PostContent
                id={params.id}
                title={post.title}
                username={post.username}
                time={post.time}
                tags={post.tags}
                visit={post.visit}
                favorites={post.favorites}
                contents={post.contents}
                childPosts={post.child}
                comments={post.comments}
                onFavoritesClick={() => {
                    console.log("조와용")
                }}
                onNewComment={(postId, commentId, str) => {
                    if(commentId === -1){
                        console.log(str)
                        uploadComment(postId, str)
                    }
                    else console.log("대댓글 작성: ", str)
                }}/>
        </div>
    )
}