import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import DocumentPicker from "../components/documentPicker";
import DynamicFileUploadForm from "../components/dynamicFileUploadForm";

function DocumentsPage() {
  const optionalDocuments = ["Sick leave form", "Cat at work form", "CV"];

  const [optionalInputsProps, setOptionalInputsProps] = useState([]);

  const addOptionalInput = (inputLabel) => {
    setOptionalInputsProps((previousArray) => [
      ...previousArray,
      { prompt: inputLabel, required: false },
    ]);
  };

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>Upload required documents and optional ones</h3>
          <DynamicFileUploadForm optionalInputsProps={optionalInputsProps} />
        </Col>
      </Row>
    </>
  );
}

export default DocumentsPage;
