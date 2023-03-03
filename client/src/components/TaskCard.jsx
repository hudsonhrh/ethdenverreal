import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import temp_image from "../images/temp_image.png";

const TaskCard = (props) =>{
  return (
    <Card
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "4%",
      }}
    >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}



export default TaskCard;