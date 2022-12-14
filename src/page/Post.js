import React from "react";
import {Container, Image} from "react-bootstrap";
import PostInfo from "../component/post/blocks/normal/PostInfo";
import MarkdownTextBlock from "../component/post/blocks/normal/MarkdownTextBlock";
import NavBar from "../component/NavBar";
import SignupForm from "../component/signup/SignupForm";
import ImageBlock from "../component/post/blocks/normal/ImageBlock";
import CodeBlock from "../component/post/blocks/normal/CodeBlock";
import useGetPost from "../service/post/PostService";
import Comment from "../component/post/comment/Comment";
import {useParams} from "react-router-dom";


/**
 * title="asdf"
 * contents
 * @param props
 * @constructor
 */
export default function Post() {

    const params = useParams()
    const post = useGetPost(params.id)

    return (
        <div>
            <NavBar
                transparent={false}
                lightText={false}
            />

            <div className="container justify-content-center" style={{marginTop: "7rem"}}>
                <PostInfo title={post.title} name={post.username} time={post.time} favorites={post.favorites}/>
                <div className="container pt-3 border-top" style={{height: "0.1rem"}}></div>

                {
                    post.contents.map(content => {
                        switch (content.type) {
                            case "text":
                                return <MarkdownTextBlock text={content.text}/>
                            case "image":
                                return <ImageBlock src={content.text} description={content.options}/>
                            case "code":
                                return <CodeBlock code={content.text} language={content.options}/>
                        }
                    })
                }

                <div className="container mt-5 border-top" style={{height: "0.1rem"}}></div>
                <h3 className="pt-3">댓글 <span className="h6 text-secondary">{post.comments.length}</span></h3>

                {
                    post.comments.map(comment => {
                        return <Comment
                            username={comment.username}
                            time={comment.time}
                            content={comment.content}
                            comments={comment.comments}
                            allowComment={true}
                        />
                    })
                }
            </div>

        </div>
    )
}