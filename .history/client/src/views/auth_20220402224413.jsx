import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = ({ authRoute }) => {
    let body = (
        <>
            LearnIt
            {/* Nhớ cú pháp này */}
            {authRoute === "login" && <LoginForm />}
            {authRoute === "register" && <RegisterForm />}
        </>
    );

    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1>Learn MERN</h1>
                    <h4>Keep track of what you are learning</h4>
                </div>
            </div>
        </div>
    );
};

export default Auth;
