import React, {useRef} from "react";
import '../App.scss';
import Header from "../component/Header";
import {useScroll} from "../util/scroll";
import {Container, ListGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import NavBar from "../component/NavBar";

export default function Main() {
    const {scrollY} = useScroll();
    const refHeader = useRef(null);
    let height = refHeader.current?.clientHeight - (4 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    if (isNaN(height)) height = 0

    return (
        <div>
            <NavBar
                transparent={scrollY <= height}
                lightText={scrollY <= height}
            />

            <div ref={refHeader}>
                <Header className={"App-header"}/>
            </div>

            <Container className="mt-5">
                <div className="text-center">
                    <div><h3><strong>관심이 있을수도..?</strong></h3></div>
                    <ToggleButtonGroup type="checkbox" size="sm" className="mt-3 gap-2">
                        <ToggleButton
                            className="rounded-pill"
                            id="toggle-check1"
                            type="checkbox"
                            checked="true"
                            variant="outline-secondary"
                            value="1"
                            onChange={(e) => console.log("Click 1")}
                        >
                            React
                        </ToggleButton>

                        <ToggleButton
                            className="rounded-pill"
                            id="toggle-check2"
                            type="checkbox"
                            checked="false"
                            variant="outline-secondary"
                            value="2"
                            onChange={(e) => console.log("Click 1")}
                        >
                            Python
                        </ToggleButton>

                        <ToggleButton
                            className="rounded-pill"
                            id="toggle-check3"
                            type="checkbox"
                            variant="outline-secondary"
                            checked="false"
                            value="3"
                            onChange={(e) => console.log("Click 1")}
                        >
                            Django
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>


                <ListGroup className="rounded-3 shadow-lg mt-4">
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">LALALALALALALALA</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 장고 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <div style={{width:"auto", display: "block"}}>
                            <p className="text-primary justify-content-end" style={{fontSize: "0.8rem"}}>#Django #Python</p>
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                </ListGroup>

                <div style={{display: "flex", width: "100%"}}>
                    <a className="text-primary justify-content-end m-4">더보기 ></a>
                </div>
            </Container>

            <Container className="mt-5">
                <div className="text-center">
                    <div><h3><strong>인기 질문</strong></h3></div>
                </div>

                <ListGroup className="rounded-3 shadow-lg mt-4">
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">LALALALALALALALA</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 장고 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <div style={{width:"auto", display: "block"}}>
                            <p className="text-primary justify-content-end" style={{fontSize: "0.8rem"}}>#Django #Python</p>
                        </div>

                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="ps-4">
                        <h4 className="mt-3">제목</h4>
                        <p>내가 LA에 있었던 시절 이것은 내용의 일부일 뿐이다. 그리 긴 내용은 아니지만 잘 들어주길 바란다. 리액트는 어렵다. ㅇㅈ? ㅇ ㅇㅈ </p>
                        <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                    </ListGroup.Item>
                </ListGroup>

                <div style={{display: "flex", width: "100%"}}>
                    <a className="text-primary justify-content-end m-4">더보기 ></a>
                </div>
            </Container>
        </div>
    )
}