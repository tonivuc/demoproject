import ListGroup from "react-bootstrap/ListGroup";
import ToDoListItem from "./toDoListItem";

function ToDoList(props) {
  const toDoItems = props.toDoItems || [];

  return (
    <ListGroup className={props.className} as="ul" className="mb-4">
      {toDoItems.map((toDoData) => (
        <ToDoListItem toDoData={toDoData} />
      ))}
    </ListGroup>
  );
}
export default ToDoList;
