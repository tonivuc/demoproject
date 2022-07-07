import { useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import FileUploadInput from "./fileUploadInput";
import { uploadFiles } from "../api/files";
import uniqid from "uniqid";

const DynamicFileUploadForm = (props) => {
  const { optionalInputsProps } = props;

  const [inputProps, setInputProps] = useState([
    { prompt: "Profile picture", required: true },
    { prompt: "Signed employment contract", required: true },
    { prompt: "Signed equipment agreement", required: true },
  ]);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  /*
  const updateSelectedFile = (fileInputNr, selectedFile) => {
    console.log("Updating nr. " + fileInputNr);
    setSelectedFiles((selectedFiles) => {
      const newSelectedFiles = [...selectedFiles];
      console.log("newSelectedFiles before: ");
      console.log(newSelectedFiles);
      if (!newSelectedFiles[fileInputNr]) {
        newSelectedFiles.splice(fileInputNr, 0, selectedFile);
      }
      console.log("newSelectedFiles: ");
      console.log(newSelectedFiles);
      return newSelectedFiles;
    });
  };
  */
  const updateSelectedFile = (fileInputNr, selectedFile) => {
    console.log("Running updateSelectedFile");
    setSelectedFiles((selectedFiles) => {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles[fileInputNr] = selectedFile;
      //console.log("newSelectedFiles");
      //console.log(newSelectedFiles);
      return newSelectedFiles;
    });
  };

  const onFileUpload = () => {
    const formData = new FormData();

    selectedFiles.map((selectedFile) => {
      formData.append("myFile", selectedFile, selectedFile.name);
    });
    setUploadedFiles(selectedFiles);

    sendFormData(formData);
  };

  const sendFormData = (formData) => {
    uploadFiles(formData);
  };

  const provideImgSrc = (file) => {
    return URL.createObjectURL(file);
  };

  const FileUploadInputs = ({ inputPrompts: inputProps }) => {
    return inputProps.map((inputProp, index) => (
      <FileUploadInput
        test={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        uniqueId={uniqid()}
        required={inputProp.required}
        prompt={inputProp.prompt}
        inputNr={index}
        onSelectedFileChange={updateSelectedFile}
      />
    ));
  };

  return (
    <Form>
      <Stack>
        {/* {inputProps.map((inputProp, index) => (
          <FileUploadInput
            required={inputProp.required}
            prompt={inputProp.prompt}
            inputNr={index}
            onSelectedFileChange={updateSelectedFile}
          />
        ))} */}
        <FileUploadInputs inputPrompts={inputProps} />
        {optionalInputsProps?.length ? <h3>Optional documents</h3> : null}
        <FileUploadInputs inputPrompts={optionalInputsProps} />
        <Button onClick={onFileUpload}>Upload pictures</Button>
        {uploadedFiles.map((uploadedFile) => {
          return (
            <div key={uniqid() + uploadedFile.name}>
              <p>{uploadedFile.name}</p>
              <img src={provideImgSrc(uploadedFile)}></img>
            </div>
          );
        })}
      </Stack>
    </Form>
  );
};

export default DynamicFileUploadForm;
