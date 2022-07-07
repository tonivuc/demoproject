import React, { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import FileUploadInput from "./fileUploadInput";
import { uploadFiles } from "../api/files";
import uniqid from "uniqid";

const DynamicFileUploadForm = (props) => {
  const [inputProps, setInputProps] = useState([
    { prompt: "Profile picture", required: true },
    { prompt: "Signed employment contract", required: true },
    { prompt: "Signed equipment agreement", required: true },
  ]);

  const [exampleState, setExampleState] = useState(false);

  const changeStateFunction = (fileInputNr, selectedFile) => {
    console.log("Running changeStateFunction");
    setExampleState((oldState) => {
      //return selectedFiles
      return oldState;
    });
  };

  //   const MemoFileInputWrapper = React.memo(function TestFunction(props) {
  //     return (
  //       <input
  //         type="file"
  //         id="avatar"
  //         name="avatar"
  //         onChange={changeStateFunction}
  //       ></input>
  //     );
  //   });

  const FileUploadInputWrapper = (props) => (
    <input
      type="file"
      id="avatar"
      name="avatar"
      onChange={changeStateFunction}
    ></input>
  );

  return (
    // <input
    //   type="file"
    //   id="avatar"
    //   name="avatar"
    //   onChange={changeStateFunction}
    // ></input>
    <FileUploadInputWrapper changeStateFunction={changeStateFunction} />
    // <MemoFileInputWrapper />
  );
};

export default DynamicFileUploadForm;
