import NavBar from "../component/NavBar";
import SignupForm from "../component/signup/SignupForm";
import React from "react";
import LoginForm from "../component/login/LoginForm";

export default function Login() {
    return (
        <div>
            <NavBar
                transparent={false}
                lightText={false}
            />

            <div className="d-flex justify-content-center" style={{marginTop: "10rem"}}>
                <LoginForm />
            </div>

        </div>
    )
}