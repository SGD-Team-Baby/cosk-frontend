import React, {useState} from "react";
import {Button, Dropdown, Stack} from "react-bootstrap";
import ReportModal from "../ReportModal";
import useGetUserInpormation from "../../../service/user/userImpormation";
import connectReport from "../../../service/ConnectReport";

export default function Comment({id, username, time, content, comments, allowComment, onNewComment, onDeleteComment, onModifyComment}) {
    const [isModify, setModifyMode] = useState(false)
    const [contentState, setContent] = useState(content)
    const [commentOpened, setCommentOpened] = useState(false)
    const [showReportModal, setShowReportModal] = useState(false)
    const [comment, setComment] = useState("")
    const {user} = useGetUserInpormation();

        return (
            <div className="mt-2">
                <Stack direction="horizontal">
                    <div><span className="fw-bold">{username}</span> <span style={{fontSize: "0.9rem"}}>{time}</span>
                    </div>

                    <div className="ms-auto">
                        <Dropdown>
                            <Dropdown.Toggle className="btn-sm text-secondary bg-white" variant="success">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setShowReportModal(true)}>신고</Dropdown.Item>
                                {
                                    (user.id===id)&&<Dropdown.Item onClick={() => setModifyMode(true)}>수정</Dropdown.Item>
                                }
                                {
                                    (user.id===id)&&<Dropdown.Item onClick={() => onDeleteComment(id)}>삭제</Dropdown.Item>
                                }

                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Stack>
                <div>{
                    isModify ?
                        <div className="w-100">
                            <input className="w-100" value={contentState} onChange={(e) => setContent(e.target.value)}/>
                            <Button className="btn-primary text-white mt-2" onClick={() => {
                                setModifyMode(false)
                                onModifyComment(id, contentState)
                            }}>수정</Button>
                        </div>
                        : contentState
                }</div>
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
                        <input style={{width: "100%"}} onChange={(e) => setComment(e.target.value)}
                               placeholder="댓글을 입력하세요"/>
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
                                onDeleteComment={onDeleteComment}
                                onModifyComment={onModifyComment}
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