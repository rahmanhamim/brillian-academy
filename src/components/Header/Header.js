import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-icon.png";
import "./Header.css";

const Header = () => {
 return (
  <nav className="d-flex justify-content-between px-5  py-4 align-items-center nav-custom">
   <div className="d-flex">
    <img style={{ height: "40px" }} src={logo} alt="" />
    <span className="fs-4 fw-bold">Brillian Academy</span>
   </div>
   <div>
    <NavLink
     className="text-decoration-none text-dark fs-5 navlink-custom"
     to="/home"
     activeStyle={{
      fontWeight: "bold",
     }}
    >
     Home
    </NavLink>
    <NavLink
     className="text-decoration-none text-dark fs-5 ms-5 navlink-custom"
     to="/courses"
     activeStyle={{
      fontWeight: "bold",
     }}
    >
     All Courses
    </NavLink>
    <NavLink
     className="text-decoration-none text-dark fs-5 ms-5 navlink-custom"
     to="/events"
     activeStyle={{
      fontWeight: "bold",
     }}
    >
     Testimonials
    </NavLink>
    <NavLink
     className="text-decoration-none text-dark fs-5 ms-5 navlink-custom"
     to="/about"
     activeStyle={{
      fontWeight: "bold",
     }}
    >
     About Us
    </NavLink>
    <i className="fas fa-search fs-5 ms-4 p-2 border  border-dark rounded-circle"></i>
    <i className="fas fa-bars fs-5 ms-4 "></i>
   </div>
  </nav>
 );
};

export default Header;
