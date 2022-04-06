import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import React from "react";
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
        // <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
        //     <Navbar.Brand className="font-weight-bolder text-white">
        //         <img
        //             src={learnItLogo}
        //             alt="learnItLogo"
        //             width="32"
        //             height="32"
        //             className="mr-2"
        //         />
        //         LearnIt
        //     </Navbar.Brand>

        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />

        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link
        //                 className="font-weight-bolder text-white"
        //                 to="/dashboard"
        //                 as={Link}
        //             >
        //                 Dashboard
        //             </Nav.Link>
        //             <Nav.Link
        //                 className="font-weight-bolder text-white"
        //                 to="/about"
        //                 as={Link}
        //             >
        //                 About
        //             </Nav.Link>
        //         </Nav>

        //         <Nav className="d-flex">
        //             <Nav.Link
        //                 className="font-weight-bolder text-white"
        //                 disabled
        //             >
        //                 Welcome Nam
        //             </Nav.Link>
        //             <Button
        //                 variant="secondary"
        //                 className="font-weight-bolder text-white"
        //             >
        //                 <img
        //                     src={logoutIcon}
        //                     alt="logoutIcon"
        //                     width="32"
        //                     height="32"
        //                     className="mr-2"
        //                 />
        //                 Logout
        //             </Button>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>

        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;
