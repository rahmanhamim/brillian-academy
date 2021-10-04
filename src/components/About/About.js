import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.png";
import { Card } from "react-bootstrap";

const About = () => {
 return (
  <div className="about-container container mx-auto  my-4 d-flex justify-content-center align-items-center row">
   <div className="about-img-side col-12  col-md-6">
    <img className="img-fluid" src={aboutImg} alt="" />
   </div>
   <div className="about-text-side col-12 col-md-6">
    <Card className="about-card">
     <h3 className="about-top-text">Why Brillian Academy?</h3>
     <Card.Header>
      <h1>About Us</h1>{" "}
     </Card.Header>
     <Card.Body>
      <Card.Title>
       Find why <i className="fas fa-arrow-circle-right"></i>
      </Card.Title>
      <Card.Text className="text-muted fs-5">
       With over 45 years of experience, Brillian Academy is internationally
       recognized as a leader in effective language training.
      </Card.Text>
     </Card.Body>
    </Card>
   </div>
  </div>
 );
};

export default About;
