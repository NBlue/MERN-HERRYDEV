// Component này tạo ra để bảo vệ route DashBoard (hoặc có thể các route khác nữa)
// Khi người dùng chưa đăng nhập và đăng kí thì khi gõ http://localhost:3000/dashboard nó sẽ tự chuyển hướng đến trang đăng nhập or dk

import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";

const ProtectedRoute = () => {
    const {
        defaultauthState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
