import { Dropdown, ListGroup } from "react-bootstrap";
import AddDocumentListItem from "./old/addDocumentListItem";
import uniqid from "uniqid";

const DocumentPicker = (props) => {
  const { documentTypes, addOptinalInput } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Add document upload</Dropdown.Toggle>

      <Dropdown.Menu>
        {documentTypes.map((docuType) => {
          return (
            <Dropdown.Item
              key={uniqid()}
              onClick={() => {
                addOptinalInput(docuType);
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
