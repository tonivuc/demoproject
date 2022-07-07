import { useState } from "react";
import { Form } from "react-bootstrap";
import uniqid from "uniqid";

const FileUploadInput = (props) => {
  const { prompt, inputNr, onSelectedFileChange, uniqueId } = props;

  console.log("Rendering FileUploadInput with index " + inputNr);

  const onFileChange = (event) => {
    console.log("onSelectedFilechange");
    console.log(onSelectedFileChange);
    //const input = event.target;

    // Object.getOwnPropertyDescriptor(
    //   window.HTMLInputElement.prototype,
    //   "value"
    // ).set.call(input, Math.random().toString());

    // // This will trigger a new render for the component
    // input.dispatchEvent(new Event("change", { bubbles: true }));
    console.log(onSelectedFileChange);
    onSelectedFileChange(inputNr, event.target.files[0]);
  };

  return (
    <Form.Group controlId={"formFile" + inputNr} className="mb-3">
      <Form.Label>{prompt}</Form.Label>
      <Form.Control type="file" onChange={onFileChange} name="uploaded_file" />
    </Form.Group>
  );
};

export default FileUploadInput;
