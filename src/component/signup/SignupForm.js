import React, {useState} from "react";
import {Accordion, Button, Container, Form, Spinner} from "react-bootstrap";

export default function SignupForm() {

    const [requestedEmailValidation, isRequestedEmailValidation] = useState(0) // 0: 안보냄 1: 보냄 2: 보내는중
    const [emailValidated, isEmailValidated] = useState(false) // 0: 안보냄 1: 보냄 2: 보내는중
    const [password, setPassword] = useState("")
    const [passwordMatch, setPasswordMatch] = useState("")

    return (
        <Container className="w-50 bg-white rounded-3 p-5 shadow" style={{minWidth: "30rem", maxWidth: "60rem"}}>
            <div className="text-center"><h3><strong>회원가입</strong></h3></div>

            <Accordion defaultActiveKey="-1" className="mt-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>이용약관</Accordion.Header>
                    <Accordion.Body>
                        <div className="overflow-auto" style={{height: "10rem"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <Form.Check
                            type="checkbox"
                            id="checkbox_terms_agreement"
                            label="동의함"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>개인정보처리방침</Accordion.Header>
                    <Accordion.Body>
                        <div className="overflow-auto" style={{height: "10rem"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <Form.Check
                            type="checkbox"
                            id="checkbox_privacy_agreement"
                            label="동의함"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h5 className="mt-4">회원 정보 입력</h5>
            <input type="text" id="input-id"
                   className="form-control text-dark rounded-pill px-2 py-1 mt-3"
                   placeholder="아이디"/>
            <input type="password" id="input_password"
                   className="form-control text-dark rounded-pill px-2 py-1 mt-3"
                   placeholder="비밀번호"/>
            <input type="password" id="input_password_check"
                   className="form-control text-dark rounded-pill px-2 py-1 mt-2"
                   placeholder="비밀번호 확인"/>

            <input type="email" id="input-id"
                   className="form-control col-md-10 text-dark rounded-pill px-2 py-1 mt-3"
                   placeholder="이메일"/>
            <div className="row px-3 mt-2">
                <Button className="rounded-pill col-12 col-md-4 col-lg-2 btn-sm text-white"
                        id="btn_login"
                        style={{height: "2rem"}}
                        onClick={() => {
                            if (requestedEmailValidation !== 2) {
                                isRequestedEmailValidation(2)
                                setTimeout(() => {
                                    isRequestedEmailValidation(1)
                                }, 1000)
                            }
                        }}>
                    {requestedEmailValidation === 0 ? "인증번호 전송" : (requestedEmailValidation === 1 ? "재전송" :
                        <Spinner animation="border" className="spinner-border-sm"/>)}
                </Button>
                <div className="col-12 col-md-8 col-lg-4">
                    <input type="email" id="input-id"
                           className="form-control text-dark rounded-pill px-2 py-1"
                           placeholder="인증번호" style={{height: "2rem"}}/>
                </div>
                {
                    emailValidated ? <span className="col-12 col-lg-6 text-primary mt-1">인증되었습니다.</span> : (
                        requestedEmailValidation !== 0 ?
                            <Button className="col-12 col-lg-3 text-white rounded-pill btn-sm" onClick={() => {
                                if(requestedEmailValidation !== 0)
                                    setTimeout(() => {
                                        isEmailValidated(true)
                                    }, 1000)
                            }}>인증하기</Button>
                            : ""
                        )
                }
            </div>

            <input type="text" id="input-name"
                   className="form-control col-md-10 text-dark rounded-pill px-2 py-1 mt-3"
                   placeholder="이름"/>

            <Button className="rounded-pill mt-4 btn-lg text-white" style={{width: "100%"}}
                    id="btn_login">가입하고 COSK 이용하기</Button>
        </Container>
    )
}
