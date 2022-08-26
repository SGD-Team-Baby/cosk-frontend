import React, {useRef} from "react";
import '../App.scss';
import Header from "../component/Header";
import {useScroll} from "../util/scroll";
import {Container, ListGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import NavBar from "../component/NavBar";
import BoardList from "../component/Board/BoardList";
import {useNavigate} from "react-router-dom";

export default function Main() {
    const {scrollY} = useScroll();
    const navigate = useNavigate()
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
                        >
                            Django
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>


                <ListGroup className="rounded-3 shadow-lg mt-4">
                    <BoardList limitLength={5}/>
                </ListGroup>

                <div style={{display: "flex", width: "100%"}}>
                    <a className="text-primary justify-content-end m-4" onClick={() => navigate("/posts/1")} style={{cursor: "pointer"}}>더보기 ></a>
                </div>
            </Container>

            <Container className="mt-5">
                <div className="text-center">
                    <div><h3><strong>인기 질문</strong></h3></div>
                </div>

                <ListGroup className="rounded-3 shadow-lg mt-4">
                    <BoardList favo={0} limitLength={5}/>
                </ListGroup>

                <div style={{display: "flex", width: "100%"}}>
                    <a className="text-primary justify-content-end m-4">더보기 ></a>
                </div>
            </Container>
        </div>
    )
}