import PostInfo from "./normal/PostInfo";
import {Button, Stack} from "react-bootstrap";
import MarkdownTextBlock from "./normal/MarkdownTextBlock";
import ImageBlock from "./normal/ImageBlock";
import CodeBlock from "./normal/CodeBlock";
import Comment from "../comment/Comment";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import ShareModal from "../ShareModal";

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
    const [modalShow, setModalShow] = useState(false)
    const [comment, setComment] = useState("")

    return (
        <div>
            <Stack direction="horizontal">
                <PostInfo title={title} name={username} time={time} favorites={favorites} visit={visit}
                          onFavoritesClick={onFavoritesClick}/>
                {
                    showChild && <div className="ms-auto">
                        <span className="material-symbols-outlined text-secondary"
                              style={{fontSize: "110%", cursor: "pointer"}}
                        onClick={() => setModalShow(true)}>ios_share</span>
                    </div>
                }

            </Stack>

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
                    <div className="ms-2">
                        {
                            childPosts.map((post) => {
                                return <div>
                                    <PostContent
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
                                    <div className="border-top my-3"></div>
                                </div>
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

            <ShareModal show={modalShow} onClose={() => setModalShow(false)} onShare={() => {
                console.log("여기에 api 호출")
            }}/>
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