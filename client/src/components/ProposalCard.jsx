import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProposalCard() {
  return (
    <Card style={{ width: "80%", display: "flex", justifyContent: "center", marginBottom: "4%"}}>
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

export default ProposalCard;
