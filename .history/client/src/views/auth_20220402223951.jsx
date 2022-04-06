import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Auth = ({ authRoute }) => {
    return (
        <>
            LearnIt
            {authRoute === "login" && <LoginForm />}
        </>
    );
};

export default Auth;
