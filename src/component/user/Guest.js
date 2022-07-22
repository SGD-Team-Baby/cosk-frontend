import React, {useState} from "react";
import {Stack, Nav, Button, OverlayTrigger, Popover} from "react-bootstrap";
import LoginForm from "../login/LoginForm";
import {useNavigate} from "react-router-dom";


export default function Guest(props) {
    const [loginPopupOpened, setLoginPopupOpened] = useState(false);
    const navigate = useNavigate()

    const handleLoginPopup = () => {
        setLoginPopupOpened(!loginPopupOpened)
    }

    return (
        <div>
            <Stack direction="horizontal" gap="3">
                <OverlayTrigger
                    trigger="click"
                    show={loginPopupOpened}
                    overlay={
                        <Popover className="bg-transparent">
                            <LoginForm/>
                        </Popover>
                    }
                    placement="bottom">

                    <Nav.Link className={props.textStyle} onClick={handleLoginPopup}>로그인</Nav.Link>
                </OverlayTrigger>

                <Button className="rounded-pill text-white" onClick={() => {navigate("/signup")}}>가입하기</Button>
            </Stack>
        </div>
    )
}