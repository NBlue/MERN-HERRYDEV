// Component này tạo ra để bảo vệ route DashBoard (hoặc có thể các route khác nữa)
// Khi người dùng chưa đăng nhập và đăng kí thì khi gõ http://localhost:3000/dashboard nó sẽ tự chuyển hướng đến trang đăng nhập or dk

import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";
import Dashboard from "../../views/Dashboard";
import About from "../../views/About";
import NavbarMenu from "../layout/NavbarMenu";
import Test from "../../views/Test";

// Lấy children là element được truyền ở App.js
const ProtectedRoute = ({ pathRoute }) => {
    console.log(pathRoute);
    const {
        authState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    if (authLoading) {
        return (
            <div className="spinner-container">
                <Spinner animation="border" variant="info" />
            </div>
        );
    }

    if (isAuthenticated) {
        if (pathRoute === "dashboard")
            return (
                <>
                    <NavbarMenu />
                    <Dashboard />
                </>
            );
        else if (pathRoute === "about")
            return (
                <>
                    <NavbarMenu />
                    <About />;
                </>
            );
        else if (pathRoute === "test")
            return (
                <>
                    <NavbarMenu />
                    <Test />
                </>
            );
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
