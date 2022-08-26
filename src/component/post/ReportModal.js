import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";

export default function ReportModal({isComment, show, onClose, onReport}) {
    const [email, setEmail] = useState("")
    const reportTypes = [
        "도배", "홍보", "음란물", "불법/유해정보", "욕설/비방", "개인정보"
    ]
    const [selectedType, setSelectedType] = useState(0)
    const [reportContent, setReportContent] = useState("")

    return (
        <Modal show={show} onHide={onClose}
               aria-labelledby="contained-modal-title-vcenter"
               centered>
            <Modal.Header closeButton>
                <Modal.Title>이 {isComment ? "댓글" : "게시글"} 신고</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>신고 유형</h5>
                <div className="row px-3" key="inline-radio">
                    {reportTypes.map((type, index) => {
                        return <Form.Check
                            checked={index === selectedType}
                            onChange={(e) => {
                                e.target.value && setSelectedType(index)
                            }}
                            className="col-6"
                            label={type}
                            name="group"
                            type="radio"
                            id={index.toString()}
                            onClick={() => setSelectedType(index)}
                        />
                    })}
                </div>

                <h5 className="mt-3">신고 내용</h5>
                <span className="ms-auto text-secondary" style={{fontSize: "90%"}}>상세히 작성하면 검토에 도움이 됩니다.</span>

                <textarea className="w-100" style={{height: "7rem"}} maxLength="150" content={reportContent}
                          onChange={(e) => setReportContent(e.target.value)}/>
                <div className="text-end">
                    <span className="ms-auto text-secondary" style={{fontSize: "90%"}}>{reportContent.length}/150</span>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => onClose()}>닫기</Button>
                <Button className="text-white" variant="primary"
                        onClick={() => onReport(isComment, reportTypes[selectedType], reportContent)}>신고</Button>
            </Modal.Footer>
        </Modal>
    )
}