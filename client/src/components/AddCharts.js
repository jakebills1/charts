import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { DropZoneDiv } from "../styled/main";
import axios from "axios";
const AddCharts = () => {
  // for dropzone
  const [file, setFile] = useState([]);
  // for form
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [group, setGroup] = useState("");
  const [buttonVisible, setButtonVisible] = useState(false);
  // function to get name and artist name from file-name of dropped pdf, and put file in state until form is submitted and record is created. TODO: error handling
  const onDrop = useCallback(
    acceptedfiles => {
      setFile(acceptedfiles[0]);
      // TODO pull name and artist from file name when possible and set initial form values for those properties
      // make form only submittable after file has been added
      var rawName = acceptedfiles[0].name;
      var indexOfHyphen = rawName.indexOf("-");
      var indexOfExt = rawName.indexOf(".pdf");
      var name = rawName.slice(0, indexOfHyphen).replace(/_/g, " ");
      var artist = rawName
        .slice(indexOfHyphen + 1, indexOfExt)
        .replace(/_/g, " ");
      setName(name);
      setArtist(artist);
      setButtonVisible(true);

      // debugger;
    },
    [file]
  );
  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });
  const handleSubmit = e => {
    e.preventDefault();
    let data = new FormData();
    data.append("file", file);
    const obj = {
      file: data,
      name: name,
      artist: artist,
      group: group,
      genre: genre
    };
    debugger;
    axios.post("/api/charts", obj).then(res => {
      setArtist("");
      setName("");
      setGroup("");
      setGenre("");
      setButtonVisible(false);
      setFile([]);
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <DropZoneDiv {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag a pdf here, or click to select one...</p>
        )}
      </DropZoneDiv>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="artist"
          value={artist}
          onChange={e => setArtist(e.target.value)}
        />
        <input
          type="text"
          placeholder="genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <input
          type="text"
          placeholder="group"
          value={group}
          onChange={e => setGroup(e.target.value)}
        />
        {buttonVisible && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};
export default AddCharts;
