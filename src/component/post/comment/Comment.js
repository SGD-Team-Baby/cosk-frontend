import React, {useState} from "react";

export default function Comment({username, time, content, comments, allowComment}) {
    const [commentOpened, setCommentOpened] = useState(false)

    return (
        <div>
            <div><span className="fw-bold">{username}</span> <span style={{fontSize: "0.9rem"}}>{time}</span></div>
            <div>{content}</div>
            {
                allowComment ?
                    <div className="pt-2 pb-2 text-primary" onClick={e => {
                        setCommentOpened(!commentOpened)
                    }} style={{cursor: "pointer"}}>
                        {
                            commentOpened ? "답글 접기" : `답글 ${
                                Array.isArray(comments) ? comments.length : 0
                            }개 보기`
                        }
                    </div>
                    : <div className="pb-4"></div>
            }
            {commentOpened && Array.isArray(comments) && comments.map(comment => {
                return (
                    <div className="ps-3">
                        <Comment
                            username={comment.username}
                            time={comment.time}
                            content={comment.content}
                            comments={[]}
                            allowComment={false}
                        />
                    </div>
                )
            })
            }
        </div>
    )
}