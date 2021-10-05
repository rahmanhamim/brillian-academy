import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";
import "./AllCourses.css";

const AllCourses = () => {
 // fetch and load data
 const [courses, setCourses] = useState([]);
 useEffect(() => {
  fetch("./courses.JSON")
   .then((res) => res.json())
   .then((data) => setCourses(data));
 }, []);

 return (
  <>
   {/* course section title here */}
   <div className="text-center mt-5 mb-4">
    <h1 className="all-course-title">
     Our All <span className="span-text">Courses</span>
    </h1>
   </div>
   {/* all card container here */}
   <div>
    <Row xs={1} md={2} className="g-4 container mb-5 mx-auto">
     {courses.map((course) => (
      <Course key={course.id} course={course}></Course>
     ))}
    </Row>
   </div>
  </>
 );
};

export default AllCourses;
