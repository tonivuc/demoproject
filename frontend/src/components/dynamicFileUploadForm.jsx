import { useCallback, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import FileUploadInput from "./fileUploadInput";
import { uploadFiles } from "../api/files";
import uniqid from "uniqid";
import BasicDropzone from "./basicDropzone";

const DynamicFileUploadForm = (props) => {
  const { optionalInputsProps } = props;

  const [inputProps, setInputProps] = useState([
    { prompt: "Profile picture", required: true },
    { prompt: "Signed employment contract", required: true },
    { prompt: "Signed equipment agreement", required: true },
  ]);

  const [selectedFiles, setSelectedFiles] = useState(new Map());
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const updateSelectedFile = (fileInputNr, selectedFile) => {
    setSelectedFiles((selectedFiles) => {
      var map = new Map(selectedFiles);
      map.set(fileInputNr, selectedFile);
      return map;
    });
  };

  const onFileUpload = () => {
    const formData = new FormData();

    getArrayFromMap(selectedFiles).map((selectedFile) => {
      formData.append("myFile", selectedFile, selectedFile.name);
    });
    setUploadedFiles(selectedFiles);

    uploadFiles(formData);
  };

  const provideImgSrc = (file) => {
    return URL.createObjectURL(file);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      updateSelectedFile(file.inputNr, file);
    });
  }, []);

  const FileUploadInputs = ({ inputPrompts: inputProps }) => {
    return inputProps.map((inputProp, index) => (
      <FileUploadInput
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
        {inputProps.map((inputProp, index) => (
          <div key={uniqid()}>
            <BasicDropzone
              prompt={inputProp.prompt}
              inputNr={index}
              onDrop={onDrop}
            />
            <UploadedFile file={selectedFiles.get(index)} />
          </div>
        ))}
        {optionalInputsProps?.length ? <h3>Optional documents</h3> : null}
        {optionalInputsProps.map((inputProp, index) => (
          <div key={uniqid()}>
            <BasicDropzone
              prompt={inputProp.prompt}
              inputNr={inputProps.length + index}
              onDrop={onDrop}
            />
            <UploadedFile file={selectedFiles.get(inputProps.length + index)} />
          </div>
        ))}
        <Button onClick={onFileUpload}>Upload files</Button>
        {/* {getArrayFromMap(uploadedFiles).map((uploadedFile) => {
          return (
            <div key={uniqid() + uploadedFile.name}>
              <p>{uploadedFile.name}</p>
              <img src={provideImgSrc(uploadedFile)}></img>
            </div>
          );
        })} */}
      </Stack>
    </Form>
  );
};

const getArrayFromMap = (map) => {
  return Array.from(map.values());
};

const UploadedFile = ({ file }) => {
  return <p style={{ fontStyle: "italic" }}>{file?.name}</p>;
};

const FileUpload = (uploadedFile, prompt, inputNr, onDrop, key) => {
  return (
    <div key={key}>
      <BasicDropzone prompt={prompt} inputNr={inputNr} onDrop={onDrop} />
      <UploadedFile file={uploadedFile} />
    </div>
  );
};

export default DynamicFileUploadForm;
