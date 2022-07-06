import { useState } from "react";
import { Form } from "react-bootstrap";

const FileUploadInput = (onSelectedFileChange) => {
  console.log(onSelectedFileChange);
  // On file select (from the pop up)
  const onFileChange = (event) => {
    console.log("OnFileChange");
    // Update the state
    onSelectedFileChange(event.target.files[0]);
  };

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Upload file</Form.Label>
      <Form.Control type="file" onChange={onFileChange} />
    </Form.Group>
  );
};

export default FileUploadInput;
