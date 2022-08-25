import {Container, Stack} from "react-bootstrap";
import NavBar from "../component/NavBar";
import '../css/material.css'
import React from "react";
import ContributionBar from "../component/user/ContributionBar";
import useGetUserInpormation from "../service/user/userImpormation";

export default function User() {


    const {user} = useGetUserInpormation();
    return (<div>
        <NavBar
            transparent={false}
            lightText={false}
        />

        <div className="d-flex justify-content-center pb-5" style={{paddingTop: "8rem"}}>
            {user != null && user.id > 0 ? <RealUser user={user}/> : <NoSuchUser/>}
        </div>

    </div>)

}

function NoSuchUser() {
    return (<Container>
        <div className="text-center align-middle">
            <h1>:(</h1>
            <p>존재하지 않는 사용자입니다</p>
        </div>
    </Container>)
}

function RealUser(props) {
    const user = props.user
    return (<Container>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0"/>

            <Stack direction="horizontal" gap={2}>
                <h1 className="fw-bold">{user.name}</h1>
                <span className="text-secondary">{user.name}</span>
            </Stack>

            <div className="mt-1">
                <span className="material-symbols-outlined align-bottom">mail</span>
                <span> {user.email}</span>
            </div>

            <h3 className="mt-3 pt-4 pb-2"><strong>질의응답 점수</strong></h3>
            <ContributionBar
                questionPoint={user.question}
                answerPoint={user.answer}/>

            <h3 className="mt-5 pt-4"><strong>최근 활동</strong></h3>
            <div>
                대충 여기에 최근 질문이나 답변들 시간순으로 몇개 정렬하면 될듯?
            </div>


        </Container>
    )
}