import React, {useState} from "react";
import {Stack, Nav, Button, OverlayTrigger, Popover, Form, Dropdown, NavDropdown} from "react-bootstrap";
import LoginForm from "../login/LoginForm";
import {useNavigate} from "react-router-dom";
import {questionPointColor} from "../../ConstantValue";


export default function NavBarUser({user, textStyle}) {
    const navigate = useNavigate()

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <div className="align-items-center align-content-center align-center text-center">
            <Stack className="ms-3" direction="horizontal" gap="3">
                <span className={textStyle}>질문 <span style={{color: questionPointColor}}>{user.question}</span></span>
                <span className={textStyle}>답변 <span style={{color: questionPointColor}}>{user.answer}</span></span>
                <h5 className={`my-auto ${textStyle}`}><b>{user.name}</b></h5>

                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        <span className="mt-1 material-symbols-outlined">account_circle</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item eventKey="1" onClick={() => navigate("/user/" + user.username)}><b>{user.name}</b><br></br><span className="text-secondary" style={{fontSize: "90%"}}>{user.username}</span></Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item eventKey="2">내 질문</Dropdown.Item>
                        <Dropdown.Item eventKey="2">내 답변</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item eventKey="1">로그아웃</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Stack>
        </div>
    )
}