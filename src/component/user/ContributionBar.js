import {Overlay, OverlayTrigger, ProgressBar, Stack, Tooltip} from "react-bootstrap";
import {useRef} from "react";
import {answerPointColor, questionPointColor} from "../../ConstantValue";

export default function ContributionBar(props) {
    const maxPoint = 100
    const question = props?.questionPoint ?? 0
    const answer = props?.answerPoint ?? 0

    return (
        <div>
            <div className="row g-0" style={{height: "0.5rem"}}>
                <div className="col-5"
                     style={{background: "#e0e0e0", borderTopLeftRadius: "0.25rem", borderBottomLeftRadius: "0.25rem"}}>
                    <div style={{
                        background: questionPointColor,
                        width: `${question * maxPoint / 99 + 1}%`,
                        minWidth: "0.25rem",
                        height: "100%",
                        borderTopLeftRadius: "0.25rem",
                        borderBottomLeftRadius: "0.25rem",
                        float: "right"
                    }}/>


                </div>

                <div className="col-2"
                     style={{background: "linear-gradient(90deg, rgba(249,0,191,1) 0%, rgba(153,0,240,1) 100%)"}}></div>

                <div className="col-5" style={{
                    background: "#e0e0e0",
                    borderTopRightRadius: "0.25rem",
                    borderBottomRightRadius: "0.25rem"
                }}>
                    <div style={{
                        background: answerPointColor,
                        width: `${answer * maxPoint / 99 + 1}%`,
                        minWidth: "0.25rem",
                        height: "100%",
                        borderTopRightRadius: "0.25rem",
                        borderBottomRightRadius: "0.25rem"
                    }}/>
                </div>
            </div>

            <div className="row g-0 pt-2" style={{height: "0.5rem"}}>
                <div className="col-5">
                    <div className="rounded-pill px-2 shadow bg-white pt-1 text-center" style={{width: "8.5rem", height: "2.5rem", float: "right", marginRight: `${question * maxPoint / 99 - 20}%`}}>
                        질문점수 <strong className="h4" style={{color: questionPointColor}}>{question}</strong>점
                    </div>
                </div>

                <div className="col-2"></div>

                <div className="col-5" >

                    <div className="rounded-pill px-2 shadow bg-white pt-1 text-center" style={{width: "8.5rem", height: "2.5rem", marginLeft: `${answer * maxPoint / 99 - 20}%`}}>
                        답변점수 <strong className="h4" style={{color: answerPointColor}}>{answer}</strong>점
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContributionBubble(props) {
    const value = props.value

    return (
        <div className="rounded-circle bg-white shadow text-center"
             style={{width: "4rem", height: "4rem"}}>{value}</div>
    )
}

/*
                            <Stack direction="horizontal" gap={2} className="rounded-pill bg-white shadow text-center px-2" style={{height: "2rem"}}>
                                <span>질문</span>
                                <h4>{question}</h4>
                            </Stack>

                    */