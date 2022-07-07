import { useState } from "react";
import { Form } from "react-bootstrap";

const FileUploadInput = (props) => {
  console.log("Inside FileUploadInput");
  const { prompt, inputNr, onSelectedFileChange } = props;
  // On file select (from the pop up)
  const onFileChange = (event) => {
    onSelectedFileChange(inputNr, event.target.files[0]);
  };

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>{prompt}</Form.Label>
      <Form.Control type="file" onChange={onFileChange} name="uploaded_file" />
    </Form.Group>
  );
};

export default FileUploadInput;
