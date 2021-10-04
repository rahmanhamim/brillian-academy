import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Course from "../Course/Course";
import "./AllCourses.css";

const AllCourses = () => {
 const [courses, setCourses] = useState([]);
 useEffect(() => {
  fetch("./courses.JSON")
   .then((res) => res.json())
   .then((data) => setCourses(data));
 }, []);

 return (
  <div>
   <Row xs={1} md={2} className="g-4 container my-5 mx-auto">
    {courses.map((course) => (
     <Course key={course.id} course={course}></Course>
    ))}
   </Row>
  </div>
 );
};

export default AllCourses;
