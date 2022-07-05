import ListGroup from "react-bootstrap/ListGroup";
import ToDoListItem from "./toDoListItem";

function ToDoList(props) {
  const toDoItems = props.toDoItems || [];

  return (
    <ListGroup className={props.className + "mb-4"} as="ul">
      {toDoItems.map((toDoData) => (
        <ToDoListItem toDoData={toDoData} />
      ))}
    </ListGroup>
  );
}
export default ToDoList;
