// Component này tạo ra để bảo vệ route DashBoard (hoặc có thể các route khác nữa)
// Khi người dùng chưa đăng nhập và đăng kí thì khi gõ http://localhost:3000/dashboard nó sẽ tự chuyển hướng đến trang đăng nhập or dk

import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/esm/Spinner";
import Dashboard from "../../views/Dashboard";

// Lấy children là element được truyền ở App.js
const ProtectedRoute = ({ children }) => {
    console.log(children);
    const {
        defaultauthState: { authLoading, isAuthenticated },
    } = useContext(AuthContext);

    // if (authLoading) {
    //     return (
    //         <div className="spinner-container">
    //             <Spinner animation="border" variant="info" />
    //         </div>
    //     );
    // }

    return (
        //<Route path="/login" element={<Auth authRoute="login" />} />
        //element={isAuthenticated ? Element : <Navigate to="/login" />}
        //<Route {...rest} element={Element} />
        <Route path="/dashboard" element={<Dashboard />} />
    );
};

export default ProtectedRoute;
