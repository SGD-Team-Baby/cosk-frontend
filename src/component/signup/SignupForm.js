import React, {useState} from "react";
import {Accordion, Button, Container, Form, Spinner} from "react-bootstrap";
import instance from "../../ConstantValue";
const validEmailRegex = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);


export default function SignupForm() {
    const [sentEmail, setSentEmail] = useState("")

    if(sentEmail === "") {
        return <SignupInputForm setSentEmail={setSentEmail}/>
    } else {
        return <SignupCompleted email={sentEmail}/>
    }
}

function SignupInputForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordMatch, setPasswordMatch] = useState("")
    const [name, setName] = useState("")

    const [privacyTermChecked, setPrivacyTermChecked] = useState(false)
    const [coskTermChecked, setCoskTermChecked] = useState(false)

    const [nicknameDuplicated, setNicknameDuplicated] = useState(false)

    return (
        <Container className="w-50 bg-white rounded-3 p-5 shadow" style={{minWidth: "30rem", maxWidth: "60rem"}}>
            <div className="text-center"><h3><strong>회원가입</strong></h3></div>

            <Accordion defaultActiveKey="-1" className="mt-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>이용약관 <small
                        className="ps-2 text-primary">{coskTermChecked ? `동의함` : `동의 안함`}</small></Accordion.Header>
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
                            checked={coskTermChecked}
                            onChange={(e) => {
                                setCoskTermChecked(!coskTermChecked)
                            }}
                            label="동의함"/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>개인정보처리방침 <small
                        className="ps-2 text-primary">{privacyTermChecked ? `동의함` : `동의 안함`}</small></Accordion.Header>
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
                            checked={privacyTermChecked}
                            onChange={(e) => {
                                setPrivacyTermChecked(!privacyTermChecked)
                            }}
                            label="동의함"/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {!coskTermChecked || !privacyTermChecked ? <p className="pt-1 text-danger">약관에 동의해 주세요.</p> : ""}

            <h5 className="mt-4">회원 정보 입력</h5>

            <input type="email" id="input-id"
                   className="form-control text-dark rounded-pill px-2 py-1 mt-3"
                   onChange={(e) => {
                       setEmail(e.target.value)
                   }}
                   placeholder="이메일"/>
            {!validEmailRegex.test(email) ? <p className="pt-1 text-danger">유효한 이메일 주소를 입력해주세요.</p> : ""}
            <input type="password" id="input_password"
                   className="form-control text-dark rounded-pill px-2 py-1 mt-3"
                   onChange={(e) => {
                       setPassword(e.target.value)
                   }}
                   placeholder="비밀번호"/>
            <input type="password" id="input_password_check"
                   className="form-control text-dark rounded-pill px-2 py-1 mt-2"
                   onChange={(e) => {
                       setPasswordMatch(e.target.value)
                   }}
                   placeholder="비밀번호 확인"/>

            {passwordMatch !== "" && password !== passwordMatch ?
                <p className="pt-1 text-danger">비밀번호가 일치하지 않습니다.</p> : ""}

            <input type="text" id="input-name"
                   className="form-control col-md-10 text-dark rounded-pill px-2 py-1 mt-3"
                   onChange={(e) => {
                       setName(e.target.value)
                       setNicknameDuplicated(false)
                   }}
                   placeholder="이름"/>

            <Button className={`rounded-pill mt-4 btn-lg text-white ${
                coskTermChecked
                && privacyTermChecked
                && validEmailRegex.test(email)
                && password !== ""
                && password === passwordMatch
                && name !== "" ? "btn-primary" : "btn-secondary disabled"
            }`} style={{width: "100%"}}
                    id="btn_signup"
                    onClick={(e) => {
                        //여기에 이메일 인증 전송 요청
                        props.setSentEmail(email)

                        console.log(email, password, password, name);
                        const url = 'http://132.226.225.49/account/registration';

                        instance.post(url,
                            {
                                'name':name,
                                'email':email,
                                'password1':password,
                                'password2':password,
                            })
                            .then(function (response) {
                                console.log(response.data);
                            })
                            .catch(function (error){
                                console.log(error.response.data);
                            })
                    }}
            >이메일 인증하고 COSK 이용하기</Button>
        </Container>
    )
}

function SignupCompleted(props) {
    return (
        <Container className="w-50 p-5 text-center" style={{minWidth: "30rem", maxWidth: "60rem"}}>
            <p>{props.email}으로 전송된 이메일을 확인해 주세요.<br></br>이메일 인증 완료 후 로그인할 수 있습니다.</p>
        </Container>
    )
}