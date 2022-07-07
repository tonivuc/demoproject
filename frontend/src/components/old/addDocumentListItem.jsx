import { ListGroup } from "react-bootstrap";

const AddDocumentListItem = (props) => {
  const { documentTitle } = props;
  return (
    <ListGroup.Item>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{documentTitle}</div>
      </div>
    </ListGroup.Item>
  );
};

export default AddDocumentListItem;
