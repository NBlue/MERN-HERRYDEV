import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const LoginForm = () => {
    // Context:
    const { loginUser } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const [alert, setAlert] = useState(null);

    //const navigate = useNavigate();

    const handleLoginForm = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value, // Viết vầy thì nó có thể vừa là username or password
        });
    };

    // Hàm này khai báo là async vì nó muốn gọi hàm async lên để dùng
    const handleLogin = async (event) => {
        event.preventDefault(); // Loại bỏ trạng thái submit mặc định của form

        try {
            const loginData = await loginUser(loginForm);
            console.log(loginData);
            // Khi post login đúng dữ liệu: success: true thì chuyến hướng đến navigate
            // if (loginData.success) {
            //     navigate("/dashboard");  // Ko cần cái này nữa vì bên Auth.jsx đã ktra và đẩy sang Dashboard rồi
            // }

            // Nếu đăng nhập có lỗi thì hiện alert
            if (!loginData.success) {
                setAlert({
                    type: "danger",
                    message: loginData.message,
                    show: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form className="my-4" onSubmit={handleLogin}>
            <AlertMessage info={alert} />

            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                    value={loginForm.username}
                    onChange={handleLoginForm}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    value={loginForm.password}
                    onChange={handleLoginForm}
                />
            </Form.Group>
            <Button variant="success" type="submit" className="mb-3">
                Login
            </Button>
            <p>
                Don't have accout?
                <Link to="/register">
                    <Button variant="info" size="sm" className="mx-2">
                        Register
                    </Button>
                </Link>
            </p>
        </Form>
    );
};

export default LoginForm;
