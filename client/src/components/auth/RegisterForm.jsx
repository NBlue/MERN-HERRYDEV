import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";

const RegisterForm = () => {
    // Context:
    const { registerUser } = useContext(AuthContext);

    const [registerForm, setRegisterForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [alert, setAlert] = useState(null);

    //const navigate = useNavigate();

    const handleRegisterForm = (event) => {
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value, // Viết vầy thì nó có thể vừa là username or password
        });
    };

    // Hàm này khai báo là async vì nó muốn gọi hàm async lên để dùng
    const handleRegister = async (event) => {
        event.preventDefault(); // Loại bỏ trạng thái submit mặc định của form

        if (registerForm.password !== registerForm.confirmPassword) {
            setAlert({ type: "danger", message: "Passwords do not match" });
            setTimeout(() => setAlert(null), 5000);
            return;
        }

        try {
            const registerData = await registerUser(registerForm);
            console.log(registerData);

            if (!registerData.success) {
                setAlert({
                    type: "danger",
                    message: registerData.message,
                });
                setTimeout(() => setAlert(null), 5000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Form className="mb-3 mt-5" onSubmit={handleRegister}>
                <AlertMessage info={alert} />

                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        value={registerForm.username}
                        onChange={handleRegisterForm}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        value={registerForm.password}
                        onChange={handleRegisterForm}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required
                        value={registerForm.confirmPassword}
                        onChange={handleRegisterForm}
                    />
                </Form.Group>
                <Button variant="success" type="submit" className="mb-3">
                    Register
                </Button>
            </Form>
            <p>
                Already have an accout?
                <Link to="/login">
                    <Button variant="info" size="sm" className="mx-2">
                        Login
                    </Button>
                </Link>
            </p>
        </>
    );
};

export default RegisterForm;
