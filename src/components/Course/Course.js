import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Course.css";

const Course = (props) => {
 const {
  name,
  img,
  description,
  instructor,
  courseLength,
  fee,
  lessonTime,
  minAge,
  classSize,
  startsDates,
  lessonDay,
 } = props.course;

 return (
  <div>
   <Col className="h-100">
    <Card className="h-100 course-card">
     <Card.Img variant="top" src={img} style={{ height: "400px" }} />
     <Card.Body>
      <Card.Title>{name} Language Course</Card.Title>
      <Card.Text>
       {description}
       <div className="mt-4">
        <h4>Details:</h4>
        <span className="me-2">
         Instructor name: <b>{instructor}</b>
        </span>
        <span className="m-2">
         Duration: <b>{courseLength}</b>
        </span>
        <span className="m-2">
         Class time: <b>{lessonTime}</b>
        </span>
        <span className="m-2">
         Min Age: <b>{minAge}</b>
        </span>
        <span className="m-2">
         Class Size: <b>{classSize}</b>
        </span>
        <span className="m-2">
         Lesson Day: <b>{lessonDay}</b>
        </span>
        <span className="m-2">
         Next Batch Starts: <b>{startsDates}</b>
        </span>
       </div>
      </Card.Text>
     </Card.Body>
     <Card.Footer className="d-flex justify-content-between align-items-center ">
      <h4 className="mx-5">Fee: {fee}$</h4>
      <button className="btn-regular mx-5">Enroll now</button>
     </Card.Footer>
    </Card>
   </Col>
  </div>
 );
};

export default Course;
