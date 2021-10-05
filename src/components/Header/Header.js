import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-icon.png";
import "./Header.css";

const Header = () => {
 return (
  // Only NavLink is from react-router-dom rest are from bootstrap
  <Navbar bg="light" expand="lg" className="navbar-container">
   <Container>
    <NavLink className="nav-brand" to="/">
     {" "}
     <img src={logo} style={{ width: "30px" }} alt="" /> Brillian Academy
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ms-auto">
      <NavLink
       to="/home"
       className="navlink-custom"
       activeStyle={{
        fontWeight: "bold",
        color: "#2d76b2",
       }}
      >
       Home
      </NavLink>
      <NavLink
       to="/courses"
       className="navlink-custom"
       activeStyle={{
        fontWeight: "bold",
        color: "#2d76b2",
       }}
      >
       Courses
      </NavLink>
      <NavLink
       to="/testimonials"
       className="navlink-custom"
       activeStyle={{
        fontWeight: "bold",
        color: "#2d76b2",
       }}
      >
       Testimonials
      </NavLink>
      <NavLink
       to="/about"
       className="navlink-custom"
       activeStyle={{
        fontWeight: "bold",
        color: "#2d76b2",
       }}
      >
       About us
      </NavLink>
     </Nav>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
};

export default Header;
