import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const NavbarMenu = () => {
    // Lấy ra username đã được lưu vào reducer ở context khi đăng nhập thành công => Lấy tên hiển thị trên navbar
    const {
        authState: {
            user: { username },
        },
        logoutUser, // Gọi ra từ trong context
    } = useContext(AuthContext);

    //console.log(username);

    const handleLogout = () => logoutUser();

    return (
        <Navbar expand="lg" bg="success" variant="dark" className="shadow px-4">
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
                <Nav className="ml-8">
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
                    <Nav.Link
                        className="font-weight-bolder text-white"
                        to="/test"
                        as={Link}
                    >
                        Test
                    </Nav.Link>
                </Nav>

                <Nav className="ms-auto">
                    <Nav.Link
                        className="font-weight-bolder text-white"
                        disabled
                    >
                        {" "}
                        Wellcome Welcome {username}
                    </Nav.Link>
                    <Button
                        variant="danger"
                        className="font-weight-bolder text-white"
                        onClick={handleLogout}
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
