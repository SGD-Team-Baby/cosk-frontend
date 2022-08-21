import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {logout, login} from "../../service/user/LoginService";

export default function LoginForm() {
    const [inputName, setinputName] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError] = useState(false);
    const [failed, setFailed] = useState(false);


    const handleInputName = (e) => {
        setinputName(e.target.value)
    }

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value)
    }

    function loginOnClick (){
        if(inputName === "" || inputPassword === "")
            setFailed(true);
        else {
            login(inputName, inputPassword)
                .then((result) => {
                    document.location.href = "/";
                })
                .catch(() => {
                    setFailed(true);
                })
        }

    }
    return (
        <div className="bg-white rounded-3 p-4 shadow-lg" style={{width: "20rem"}}>
            <div className="text-center"><h3><strong>로그인</strong></h3></div>
            <input type="text" id="input_login_id"
                   value={inputName}
                   onChange={handleInputName}
                   className="form-conrtol text-dark px-2 py-1 mt-4" style={{width: "100%"}}
                   placeholder="아이디"/>
            <input type="password" id="input_login_pw"
                   value={inputPassword}
                   onChange={handleInputPassword}
                   className="form-conrtol text-dark px-2 py-1 mt-2" style={{width: "100%"}}
                   placeholder="비밀번호"/>
            <Form.Check
                className="mt-3"
                type="checkbox"
                id="checkbox_auto_login"
                label="자동 로그인" />

            {
                failed && (
                    <div className="failed-message" style={{width: "20rem", 'textAlign':'left', 'color':'red'}}>
                        <p>로그인에 실패했습니다.</p>
                    </div>
                )
            }
            <Button className="rounded-pill mt-4 btn-lg text-white" style={{width: "100%"}} id="btn_login" onClick={loginOnClick}>로그인</Button>
            <Button className="rounded-pill mt-2 btn-outline-secondary bg-white " style={{width: "100%"}} id="btn_findpassword">비밀번호 찾기</Button>
        </div>
    );
}

