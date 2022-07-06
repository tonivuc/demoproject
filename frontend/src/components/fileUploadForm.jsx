import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import FileUploadInput from "./fileUploadInput";
import { uploadFiles } from "../api/files";

const FileUploadForm = () => {
  /*
  const [selectedFile1, setSelectedFile1] = useState();

  const updateSelectedFile1 = (selectedFile) => {
    setSelectedFile1(selectedFile);
  };
  */

  //Idea:
  const [selectedFiles, setSelectedFiles] = useState([3]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const updateSelectedFile = (fileInputNr, selectedFile) => {
    setSelectedFiles((selectedFiles) => {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles[fileInputNr - 1] = selectedFile;
      return newSelectedFiles;
    });
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    console.log("onFileUpload, selectedFiles:");
    console.log(selectedFiles);
    // Create an object of formData
    const formData = new FormData();

    selectedFiles.map((selectedFile) => {
      formData.append("myFile", selectedFile, selectedFile.name);
    });
    setUploadedFiles(selectedFiles);
    console.log("FormData to send: ");
    console.log(formData);

    // Request made to the backend api
    // Send formData object
    sendFormData(formData);
  };

  const sendFormData = (formData) => {
    uploadFiles(formData);
  };

  const provideImgSrc = (file) => {
    return URL.createObjectURL(file);
  };

  return (
    <Stack>
      <FileUploadInput
        inputNr={1}
        onSelectedFileChange={updateSelectedFile}
      ></FileUploadInput>
      <FileUploadInput
        inputNr={2}
        onSelectedFileChange={updateSelectedFile}
      ></FileUploadInput>
      <FileUploadInput
        inputNr={3}
        onSelectedFileChange={updateSelectedFile}
      ></FileUploadInput>
      <Button onClick={onFileUpload}>Upload pictures</Button>
      {uploadedFiles.map((uploadedFile) => {
        return (
          <>
            <p>{uploadedFile.name}</p>
            <img src={provideImgSrc(uploadedFile)}></img>
          </>
        );
      })}
    </Stack>
  );
};

export default FileUploadForm;
