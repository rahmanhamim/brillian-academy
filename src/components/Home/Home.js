import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Home.css";
import bottomBanner from "../../images/home-bottom-section.jpg";
import { Link } from "react-router-dom";

const Home = () => {
 const [courseData, setCourseData] = useState([]);
 useEffect(() => {
  fetch("courses.JSON")
   .then((res) => res.json())
   .then((data) => setCourseData(data));
 }, []);

 return (
  <>
   <section className="hero-section text-light d-flex justify-content-center align-items-center">
    <div className="hero-text text-center">
     <h1 className="display-2 fw-bold">Supreme Language School</h1>
     <p className="fs-3">
      A simply amazing opportunity to expand your knowlegde
     </p>
    </div>
   </section>
   <section className="course-section container my-5">
    <h1 className="my-5">Our Popular Courses</h1>
    <Row xs={1} md={2} className="g-5">
     {courseData.slice(0, 4).map((course) => (
      <Col key={course.id}>
       <Card className="h-100 course-card">
        <Card.Img variant="top" src={course.img} style={{ height: "400px" }} />
        <Card.Body>
         <Card.Title>{course.name} Language Course</Card.Title>
         <Card.Text>{course.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center ">
         <h4 className="mx-5">Fee: {course.fee}$</h4>
         <Link to="/courses">
          <button className="btn-regular mx-5">Enroll now</button>
         </Link>
        </Card.Footer>
       </Card>
      </Col>
     ))}
    </Row>
   </section>
   <section className="subscribe-section my-5 bottom-banner">
    <div className="placeholder-side"></div>
    <div className="content-side">
     <h1>Committed to educating and nurturing all students</h1>
     <p>
      Ambition is the key that may be hard-wired into our DNA; however, it only
      becomes activated when properly stimulated. Ambition and positivity are
      features of human nature that are recognized in our parents, our teachers,
      and our peers. These attributes are nurtured in many children as they move
      through their formative years and drives them to greatness in their field.
      As part of the Nord Anglia family of international schools, Compass
      International School Doha drives the same ambition towards each student’s
      education. This British International school is located over three
      campuses with over seventy nationalities and provides global opportunities
      for all its students.
     </p>
    </div>
   </section>
  </>
 );
};

export default Home;
