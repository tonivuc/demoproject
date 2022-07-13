import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import FileUploadInput from "./fileUploadInput";
import { uploadFiles } from "../../api/files";
import uniqid from "uniqid";

const FileUploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([3]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const updateSelectedFile = (fileInputNr, selectedFile) => {
    setSelectedFiles((selectedFiles) => {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles[fileInputNr - 1] = selectedFile;
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
          <div key={uniqid() + uploadedFile.name}>
            <p>{uploadedFile.name}</p>
            <img src={provideImgSrc(uploadedFile)}></img>
          </div>
        );
      })}
    </Stack>
  );
};

export default FileUploadForm;
