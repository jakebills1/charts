import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropZoneDiv } from "../styled/main";
const AddCharts = () => {
  const [file, setFile] = useState({});
  const onDrop = useCallback(acceptedfiles => {
    debugger;
  }, []);
  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });
  return (
    <DropZoneDiv {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <p>Drag a pdf here, or click to select one...</p>
      )}
    </DropZoneDiv>
  );
};
export default AddCharts;
