import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function BasicDropzone({ onDrop, inputNr, prompt }) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: { "image/*": [] },
    getFilesFromEvent: (event) => myCustomFileGetter(event),
  });

  async function myCustomFileGetter(event) {
    const files = [];
    const fileList = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;

    for (var i = 0; i < fileList.length; i++) {
      const file = fileList.item(i);

      Object.defineProperty(file, "inputNr", {
        value: inputNr,
      });

      files.push(file);
    }

    return files;
  }

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  //const files = acceptedFiles.map((file) => <p key={file.path}>{file.path}</p>);

  return (
    <div>
      <p>{prompt}</p>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop file, or click to select file</p>
      </div>
    </div>
  );
}

export default BasicDropzone;
