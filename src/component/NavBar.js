import React from "react";
import Logo from "./logo/ImageLogo";
import LogoText from "./logo/TextLogo";
import {Container, Navbar, Stack} from "react-bootstrap";
import '../css/material.css'
import '../css/search.css'
import Guest from "./user/Guest";
import LoginForm from "./login/LoginForm";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const shadow = this.props.transparent ? "" : "shadow-sm"
        const backgroundState = this.props.transparent ? "transparent" : "white"
        const textState = this.props.lightText ? "light" : "dark"

        return (
            <div>
                <Navbar bg={backgroundState} variant={textState} fixed="top" className={shadow}>
                    <Container className="align-content-center">
                        <Navbar.Brand href="#home">
                            <Stack direction="horizontal" gap="3">
                                <Logo />
                                <LogoText textStyle={`text-${textState}`}/>
                            </Stack>
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">

                            <div className="search-input me-2 w-25">
                                <input type="text" id="search"
                                       className="form-control text-dark rounded-pill px-2 py-1 "
                                       placeholder="search"/>
                            </div>

                            <Guest textStyle={`text-${textState}`}/>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="justify-content-end">
                </div>
            </div>

        );
    }
}

function Login(props) {
    const show = props.show;

    if(show) {
        return <LoginForm />
    } else {
        return <></>
    }
}

/*
<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                            <li className="nav-item">
                                <div className="search-input">
                                    <input type="text" id="search"
                                           className="form-conrtol text-dark rounded-pill px-2 py-1 "
                                           style={{marginTop: "0.2rem"}} placeholder="search"/>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">로그인</a>
                            </li>
                            <li className="nav-item">
                                <button type="button"
                                        className="nav-link btn text-light btn-primary rounded-pill">가입하기
                                </button>
                            </li>
                        </ul>
                    </div>
 */