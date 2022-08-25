import PostInfo from "./normal/PostInfo";
import {Button, Stack} from "react-bootstrap";
import MarkdownTextBlock from "./normal/MarkdownTextBlock";
import ImageBlock from "./normal/ImageBlock";
import CodeBlock from "./normal/CodeBlock";
import Comment from "../comment/Comment";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function PostContent({
                                        showChild,
                                        showComments,
                                        id,
                                        title,
                                        username,
                                        time,
                                        tags,
                                        visit,
                                        favorites,
                                        contents,
                                        childPosts,
                                        comments,
                                        onNewComment,
                                        onFavoritesClick
                                    }) {

    const navigate = useNavigate()
    const [comment, setComment] = useState("")

    return (
        <div className="container justify-content-center" style={{marginTop: "7rem"}}>
            <PostInfo title={title} name={username} time={time} favorites={favorites} visit={visit}
                      onFavoritesClick={onFavoritesClick}/>
            {
                tags && (
                    <Stack direction="horizontal" gap="2">
                        {
                            tags.map((tag) => {
                                return <div className="border rounded-pill p-1 px-3 text-secondary">{tag}</div>
                            })
                        }
                    </Stack>
                )
            }
            <div className="container my-3 border-top" style={{height: "0.1rem"}}></div>

            {
                contents.map(content => {
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

            {
                showChild && <h3 className="pt-3">답글 <span className="h6 text-secondary">{childPosts.length}</span>
                    <Link to={`/edit/${id}`}><span className="ps-3 h6 text-primary">답글 작성</span></Link></h3>
            }
            {
                showChild &&
                <div className="row">
                    <div className="col-1">

                    </div>
                    <div className="col-11">
                        {
                            childPosts.map((post) => {
                                return <PostContent
                                    id={id}
                                    title={post.title}
                                    username={post.username}
                                    time={post.time}
                                    tags={post.tags}
                                    favorites={post.favorites}
                                    contents={post.contents}
                                    childPosts={post.child}
                                    comments={post.comments}
                                    showChild={false}
                                />
                            })
                        }
                    </div>
                </div>
            }
            {
                showComments && <div>
                    <h3 className="pt-3">댓글 <span className="h6 text-secondary">{comments.length}</span></h3>
                    <input style={{width: "100%"}} onChange={(e) => setComment(e.target.value)} placeholder="댓글을 입력하세요"/>
                    <Button className="text-white mt-2" onClick={() => {
                        onNewComment(id, -1, comment)
                    }}>댓글 작성</Button>
                    {
                        comments.map((comment) => {
                            return <Comment
                                id={comment.id}
                                username={comment.user.name}
                                time={comment.time}
                                content={comment.text}
                                allowComment={true}
                                onNewComment={(commentId) => onNewComment(id, commentId, comment)}
                            />
                        })
                    }
                </div>
            }
        </div>
    )
}

PostContent.defaultProps = {
    contents: [],
    comments: [],
    childPosts: [],
    showChild: true,
    showComments: true
}