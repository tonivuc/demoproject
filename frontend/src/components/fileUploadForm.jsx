import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import FileUploadInput from "./fileUploadInput";

const FileUploadForm = () => {
  const [selectedFile1, setSelectedFile1] = useState();

  const updateSelectedFile1 = (selectedFile) => {
    setSelectedFile1(selectedFile);
  };

  // On file upload (click the upload button)
  const onFileUpload = () => {
    console.log("onFileUpload");
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    if (selectedFile1)
      formData.append("myFile", selectedFile1, selectedFile1.name);

    // Details of the uploaded file
    console.log(selectedFile1);
    console.log(formData);

    // Request made to the backend api
    // Send formData object
    //sendFormData(formData);
    //axios.post("api/uploadfile", formData);
  };

  return (
    <Stack>
      <FileUploadInput
        onSelectedFileChange={updateSelectedFile1}
      ></FileUploadInput>
      <Button onClick={onFileUpload}>Upload pictures</Button>
    </Stack>
  );
};

export default FileUploadForm;
