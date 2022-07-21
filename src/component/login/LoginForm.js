import React from "react";
import {Button, Form, ModalBody} from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/FormCheckLabel";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="bg-white rounded-3 p-4 shadow-lg" style={{width: "20rem"}}>
                <div className="text-center"><h3><strong>로그인</strong></h3></div>
                <input type="text" id="input_login_id"
                       className="form-conrtol text-dark px-2 py-1 mt-4" style={{width: "100%"}}
                       placeholder="아이디"/>
                <input type="password" id="input_login_pw"
                       className="form-conrtol text-dark px-2 py-1 mt-2" style={{width: "100%"}}
                       placeholder="비밀번호"/>
                <Form.Check
                    className="mt-3"
                    type="checkbox"
                    id="checkbox_auto_login"
                    label="자동 로그인" />

                <Button className="rounded-pill mt-4 btn-lg text-white" style={{width: "100%"}} id="btn_login">로그인</Button>
                <Button className="rounded-pill mt-2 btn-outline-secondary bg-white " style={{width: "100%"}} id="btn_findpassword">비밀번호 찾기</Button>
            </div>
        );
    }
}