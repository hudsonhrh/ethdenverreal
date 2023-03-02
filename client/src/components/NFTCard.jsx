import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import temp_image from "../images/temp_image.png";

function NFTCard() {
  return (
    <Card
      style={{
        width: "80%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "4%",
      }}
    >
      <img variant="top" src={temp_image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NFTCard;
