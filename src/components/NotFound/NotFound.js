import React from "react";
import { Link } from "react-router-dom";
import imgNotFound from "../../images/page-not-found.png";
import "./NotFound.css";

const NotFound = () => {
 return (
  <div
   className="d-flex justify-content-center align-items-center text-center m-5"
   style={{ minHeight: "60vh" }}
  >
   <div>
    <h1>404 Error Page not found</h1>
    <div>
     <img src={imgNotFound} style={{ width: "26rem" }} alt="" />
    </div>

    <Link to="/home" className="btn-regular btn-error-home">
     Go to home
    </Link>
   </div>
  </div>
 );
};

export default NotFound;
