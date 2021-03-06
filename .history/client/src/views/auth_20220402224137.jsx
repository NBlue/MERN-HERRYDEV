import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = ({ authRoute }) => {
    return (
        <>
            LearnIt
            {/* Nhớ cú pháp này */}
            {authRoute === "login" && <LoginForm />}
            {authRoute === "register" && <RegisterForm />}
        </>
    );
};

export default Auth;
