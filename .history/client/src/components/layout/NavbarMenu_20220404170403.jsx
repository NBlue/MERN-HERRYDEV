import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const NavbarMenu = () => {
    // const {
    // 	authState: {
    // 		user: { username }
    // 	},
    // 	logoutUser
    // } = useContext(AuthContext)

    // const logout = () => logoutUser()

    return (
        <Navbar expand="lg" bg="primary" variant="dark" className="shadow px-4">
            <Navbar.Brand className="font-weight-bolder text-white">
                <img
                    src={learnItLogo}
                    alt="learnItLogo"
                    width="32"
                    height="32"
                    className="mr-2"
                />
                LearnIt
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                    <Nav.Link
                        className="font-weight-bolder text-white"
                        to="/dashboard"
                        as={Link}
                    >
                        Dashboard
                    </Nav.Link>
                    <Nav.Link
                        className="font-weight-bolder text-white"
                        to="/about"
                        as={Link}
                    >
                        About
                    </Nav.Link>
                </Nav>

                <Nav className="ms-auto">
                    <Nav.Link
                        className="font-weight-bolder text-white"
                        disabled
                    >
                        Welcome Nam
                    </Nav.Link>
                    <Button
                        variant="danger"
                        className="font-weight-bolder text-white"
                    >
                        <img
                            src={logoutIcon}
                            alt="logoutIcon"
                            width="32"
                            height="32"
                            className="mr-2"
                        />
                        Logout
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarMenu;
