import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner"; // Cái loadding quay quay chờ context tương tác database ktra xong mời re-render giao diện

const Auth = ({ authRoute }) => {
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    let body;
    if (authLoading) {
        // Cái này tạo trạng thái load khi tự ý thay đổi thanh địa chỉ => Sau nhớ cần tìm hiểu thêm
        body = (
            <div className="d-flex justify-content-center mt-2">
                <Spinner animation="border" variant="info" />
            </div>
        );
    } else if (isAuthenticated) {
        //Kiểm tra có token, login trước đó rồi thì chuyển luôn đến trang dashboard
        return <Navigate to="/dashboard" />;
    } else {
        body = (
            <>
                {/* Nhớ cú pháp này */}
                {authRoute === "register" && <RegisterForm />}
                {authRoute === "login" && <LoginForm />}
            </>
        );
    }

    return (
        <div className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1>Learn MERN</h1>
                    <h4>Keep track of what you are learning</h4>
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Auth;
