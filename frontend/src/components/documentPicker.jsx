import { Dropdown, ListGroup } from "react-bootstrap";
import AddDocumentListItem from "./old/addDocumentListItem";

const DocumentPicker = (props) => {
  const { documentTypes } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Add document upload</Dropdown.Toggle>

      <Dropdown.Menu>
        {documentTypes.map((docuType) => {
          return (
            <Dropdown.Item
              onClick={() => {
                console.log(docuType);
              }}
            >
              {docuType}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DocumentPicker;
