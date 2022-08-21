import React, {useState} from "react";
import {Stack, Nav, Button, OverlayTrigger, Popover} from "react-bootstrap";
import LoginForm from "../login/LoginForm";
import {useNavigate} from "react-router-dom";


export default function NavBarGuest(props) {
    const navigate = useNavigate()

    return (
        <div>
            <Stack direction="horizontal" gap="3">
                <Nav.Link className={props.textStyle} onClick={() => navigate("/login")}>로그인</Nav.Link>
                <Button className="rounded-pill text-white" onClick={() => {
                    navigate("/signup")
                }}>가입하기</Button>
            </Stack>
        </div>
    )
}