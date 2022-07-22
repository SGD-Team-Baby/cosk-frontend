import NavBar from "../component/NavBar";
import React from "react";
import {Container} from "react-bootstrap";
import SignupForm from "../component/signup/SignupForm";

export default function Signup() {

    return (
        <div>
            <NavBar
                transparent={false}
                lightText={false}
            />

            <div className="d-flex justify-content-center" style={{marginTop: "10rem"}}>
                <SignupForm />
            </div>

        </div>
    )
}