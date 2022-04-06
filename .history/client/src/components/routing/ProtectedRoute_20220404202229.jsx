// Component này tạo ra để bảo vệ route DashBoard (hoặc có thể các route khác nữa)
// Khi người dùng chưa đăng nhập và đăng kí thì khi gõ http://localhost:3000/dashboard nó sẽ tự chuyển hướng đến trang đăng nhập or dk

import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";
import Dashboard from "../../views/Dashboard";
import About from "../../views/About";

// Lấy children là element được truyền ở App.js
const ProtectedRoute = ({ path }) => {
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
        if (path === "dashboard") return <Dashboard />;
        else if ((path = "about")) return <About />;
    } else {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
