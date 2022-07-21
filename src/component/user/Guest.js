import React from "react";
import {Stack, Nav, Button, OverlayTrigger, Tooltip, Popover} from "react-bootstrap";
import Logo from "../logo/ImageLogo";
import LogoText from "../logo/TextLogo";
import LoginForm from "../login/LoginForm";

export default class Guest extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoginPopup = this.handleLoginPopup.bind(this)
        this.state = {loginPopupOpened: false}
    }

    handleLoginPopup() {
        this.setState({loginPopupOpened: !this.state.loginPopupOpened})
    }

    render() {
        return (
            <div>
                <Stack direction="horizontal" gap="3">
                    <OverlayTrigger
                        trigger="click"
                        show={this.state.loginPopupOpened}
                        overlay={
                            <Popover className="bg-transparent">
                                <LoginForm />
                            </Popover>
                        }
                        placement="bottom">

                        <Nav.Link className={this.props.textStyle} onClick={this.handleLoginPopup}>로그인</Nav.Link>
                    </OverlayTrigger>

                    <Button className="rounded-pill text-white">가입하기</Button>
                </Stack>
            </div>
        );
    }
}