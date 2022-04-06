import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
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
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarMenu;
