import {Button, Modal} from "react-bootstrap";

export default function ShareModal({show, onClose, onShare}) {
    return (
        <Modal show={show} onHide={onClose}
               aria-labelledby="contained-modal-title-vcenter"
               centered>
            <Modal.Header closeButton>
                <Modal.Title>메일로 공유</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="w-100">
                    <p>공유할 이메일 주소</p>
                    <input className="w-100" type="email" placeholder="someone@example.com"/>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => onClose()}>닫기</Button>
                <Button className="text-white" variant="primary" onClick={() => onShare()}>공유</Button>
            </Modal.Footer>
        </Modal>
    )
}