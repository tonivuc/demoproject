import { ListGroup } from "react-bootstrap";
import AddDocumentListItem from "./addDocumentListItem";

const DocumentTypesList = (props) => {
  const { documentTypes } = props;
  return (
    <ListGroup>
      {documentTypes.map((docuType) => {
        return <AddDocumentListItem documentTitle={docuType} />;
      })}
    </ListGroup>
  );
};

export default DocumentTypesList;
