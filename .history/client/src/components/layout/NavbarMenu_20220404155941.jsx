import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

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
    return <div className="">Hello xin chao!</div>;
};

export default NavbarMenu;
