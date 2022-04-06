import React from "react";
import { Navigate } from "react-router-dom";

const Landing = () => {
    // Navigate: chuyển hướng đến /login: ví dụ khi nhập localhost:3000 thì nó sẽ tự động chuyển đến: localhost:3000/login
    return <Navigate to="/login" />;
};

export default Landing;
