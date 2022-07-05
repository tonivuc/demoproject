import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Card } from "react-bootstrap";

function ToDoListItem(props) {
  const { title, description } = props.toDoData || {
    title: "",
    description: "",
  };

  return (
    <Card as="li" key={title + description}>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ToDoListItem;
