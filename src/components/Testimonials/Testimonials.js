import React from "react";
import { Card } from "react-bootstrap";
import "./Testimonials.css";
import img1 from "../../images/testimonial-1.jpg";
import img2 from "../../images/testimonial-2.jpg";
import img3 from "../../images/testimonial-3.jpg";
import img4 from "../../images/testimonial-4.jpg";

const Testimonials = () => {
 return (
  <div className="testimonial-container">
   <Card className="about-card w-50 mx-auto my-4">
    <h3 className="about-top-text">What Students Say?</h3>
    <Card.Header>
     <h1>Testimonials</h1>{" "}
    </Card.Header>
    <Card.Body>
     <Card.Text className="text-muted fs-5">
      With over 45 years of experience, Brillian Academy is internationally
      recognized as a leader in effective language training.
     </Card.Text>
    </Card.Body>
   </Card>
   <div className="row m-5">
    <div className="col-12 col-md-3">
     <div className="card text-white">
      <img src={img1} className="card-img img-testimonial" alt="..." />
      <div className="card-img-overlay testimonial-card-custom">
       <i className="fas fa-4x fa-play testimonial-icon"></i>
       <p className="card-text fs-4 my-5">
        I had a wonderful time at this school, and an unforgettable moments! I
        felt that improving my English skills was very natural and adaptive!
       </p>
       <h5>Preston, Jordan</h5>
      </div>
     </div>
    </div>
    <div className="col-12 col-md-3">
     <div className="card  text-white">
      <img src={img2} className="card-img" alt="..." />
      <div className="card-img-overlay">
       <i className="fas fa-4x fa-play testimonial-icon"></i>
       <p className="card-text fs-4 my-5">
        I'm from Spain and it's a long distance from my country just to study
        and improve my English, but thankfully I did it and it was the best
        decision I could have ever made.
       </p>
       <h5>Omar, Spain </h5>
      </div>
     </div>
    </div>
    <div className="col-12 col-md-3">
     <div className="card  text-white">
      <img src={img3} className="card-img" alt="..." />
      <div className="card-img-overlay">
       <i className="fas fa-4x fa-play testimonial-icon"></i>
       <p className="card-text fs-4 my-5">
        Hello my name is Mostafa and I am from Egypt. I started studying at IIC
        14 months ago. Check out my video testimonial below!
       </p>
       <h5>Mustafa Gordon, Egypt </h5>
      </div>
     </div>
    </div>
    <div className="col-12 col-md-3">
     <div className="card  text-white">
      <img src={img4} className="card-img" alt="..." />
      <div className="card-img-overlay">
       <i className="fas fa-4x fa-play testimonial-icon"></i>
       <p className="card-text fs-4 my-5">
        My name is Maria. I am studying at the IIC for two and a half years.
        Overall I have excellent impression of this school.
       </p>
       <h5>Maria O., Rissia </h5>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Testimonials;
