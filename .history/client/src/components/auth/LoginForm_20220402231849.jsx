import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <Form className="mb-3 mt-5">
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="pasword"
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" className="mb-3">
                Login
            </Button>
            <p>
                Don't have accout?
                <Link to="/register" className="ml-2">
                    <Button variant="info" size="sm">
                        Register
                    </Button>
                </Link>
            </p>
        </Form>
    );
};

export default LoginForm;
