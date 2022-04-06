import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const handleLoginForm = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value, // Viết vầy thì nó có thể vừa là username or password
        });
    };

    return (
        <Form className="mb-3 mt-5">
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
