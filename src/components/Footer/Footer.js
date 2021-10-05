import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
 return (
  <div className="d-flex flex-column h-100 bg-dark">
   <footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
     <div className="row gy-4 d-flex justify-content-between">
      {/* footer left side starts here */}
      <div className="col-lg-4 col-md-4">
       <h5 className="h1 text-white">Brillian Academy</h5>
       <p className="small text-muted">
        Whether a child or an adult, every person has a unique learning
        mechanism which is different from other. Which way a person can learn
        depends on that person’s idiosyncrasy which varies from person to
        person. Therefore, the same teaching method does NOT work for teaching
        all.
       </p>
       <p className="small text-muted mb-0">
        &copy; Copyrights. All rights reserved.
        <Link className="text-primary text-decoration-none" to="/">
         {" "}
         BrillianAcademy.com
        </Link>
       </p>
      </div>
      {/* footer middle section here */}
      <div className="col-lg-2 col-md-4">
       <h5 className="text-white mb-3">Quick links</h5>
       <ul className="list-unstyled text-muted">
        <li>
         <Link to="/" className="footer-link">
          Home
         </Link>
        </li>
        <li>
         <Link to="/about" className="footer-link">
          About
         </Link>
        </li>
        <li>
         <Link to="/courses" className="footer-link">
          Get started
         </Link>
        </li>
        <li>
         <Link to="/about" className="footer-link">
          FAQ
         </Link>
        </li>
       </ul>
      </div>
      {/* footer right side here */}
      <div className="col-lg-4 col-md-4">
       <h5 className="text-white mb-3">Newsletter</h5>
       <p className="small text-muted">
        Enter you email and subscribe to our newsletter
       </p>
       <form action="#">
        <div className="input-group mb-3">
         <input
          className="form-control"
          type="text"
          placeholder="Your Email"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
         />
         <button className="btn btn-danger" id="button-addon2" type="button">
          <i className="fas fa-paper-plane"></i>
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </footer>
  </div>
 );
};

export default Footer;
