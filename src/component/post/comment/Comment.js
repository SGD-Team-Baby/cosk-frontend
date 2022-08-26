import React, {useState} from "react";
import {Button, Dropdown, Stack} from "react-bootstrap";
import ReportModal from "../ReportModal";

export default function Comment({id, username, time, content, comments, allowComment, onNewComment}) {
    const [commentOpened, setCommentOpened] = useState(false)
    const [showReportModal, setShowReportModal] = useState(false)
    const [comment, setComment] = useState("")

    return (
        <div className="mt-2">
            <Stack direction="horizontal">
                <div><span className="fw-bold">{username}</span> <span style={{fontSize: "0.9rem"}}>{time}</span></div>

                <div className="ms-auto">
                    <Dropdown>
                        <Dropdown.Toggle className="btn-sm text-secondary bg-white" variant="success">
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setShowReportModal(true)}>신고</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Stack>
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
            {
                commentOpened && <div>
                    <input style={{width: "100%"}} onChange={(e) => setComment(e.target.value)} placeholder="댓글을 입력하세요"/>
                    <Button className="text-white mt-2" onClick={() => {
                        onNewComment(id, comment)
                    }}>대댓글 작성</Button>
                </div>
            }
            {commentOpened && Array.isArray(comments) && comments.map(comment => {
                return (
                    <div className="ps-3">
                        <Comment
                            id={comment.id}
                            username={comment.username}
                            time={comment.time}
                            content={comment.content}
                            comments={[]}
                            allowComment={false}
                            onNewComment={onNewComment}
                        />
                    </div>
                )
            })
            }

            <ReportModal isComment={true} show={showReportModal} onClose={() => setShowReportModal(false)}
                         onReport={(isComment, reportType, reportContent) => {
                             console.log("댓글", id, "신고 gogo", reportType, reportContent)
                         }}/>
        </div>
    )
}