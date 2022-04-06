import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
            <Form.Group className="mb-3">
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" className="mb-3">
                Register
            </Button>
            <p>
                Already have an accout?
                <Link to="/login">
                    <Button variant="info" size="sm" className="mx-2">
                        Login
                    </Button>
                </Link>
            </p>
        </Form>
    );
};

export default RegisterForm;
