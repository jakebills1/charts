import React from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
class AddCharts extends React.Component {
  state = {
    formValues: { name: "", artist: "", genre: "", group: "", file: "" },
    buttonVisible: false
  };
  onDrop = files => {
    var indexOfHyphen = files[0].name.indexOf("-");
    var indexOfExt = files[0].name.indexOf(".pdf");
    var name = files[0].name.slice(0, indexOfHyphen).replace(/_/g, " ");
    var artist = files[0].name
      .slice(indexOfHyphen + 1, indexOfExt)
      .replace(/_/g, " ");
    this.setState({
      formValues: {
        ...this.state.formValues,
        file: files[0],
        name: name,
        artist: artist
      },
      buttonVisible: !this.state.buttonVisible
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { formValues } = this.state;
    let data = new FormData();
    data.append("file", formValues.file);
    data.append("name", formValues.name);
    data.append("artist", formValues.artist);
    data.append("genre", formValues.genre);
    data.append("group", formValues.group);
    axios.post("/api/charts", data).then(res =>
      this.setState({
        formValues: { name: "", artist: "", genre: "", group: "", file: "" },
        buttonVisible: false
      })
    );
  };
  render() {
    const {
      formValues: { name, artist, group, genre },
      buttonVisible
    } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={this.handleSubmit}>
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
            style={{ width: "300px", height: "300px", backgroundColor: "grey" }}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop file here</p>
                  ) : (
                    <p>Drag your file here to upload</p>
                  )}
                </div>
              );
            }}
          </Dropzone>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={e =>
              this.setState({
                formValues: { ...this.state.formValues, name: e.target.value }
              })
            }
          />
          <input
            type="text"
            placeholder="artist"
            value={artist}
            onChange={e =>
              this.setState({
                formValues: { ...this.state.formValues, artist: e.target.value }
              })
            }
          />
          <input
            type="text"
            placeholder="genre"
            value={genre}
            onChange={e =>
              this.setState({
                formValues: { ...this.state.formValues, genre: e.target.value }
              })
            }
          />
          <input
            type="text"
            placeholder="group"
            value={group}
            onChange={e =>
              this.setState({
                formValues: { ...this.state.formValues, group: e.target.value }
              })
            }
          />
          {buttonVisible && <button type="submit">Submit</button>}
        </form>
      </div>
    );
  }
}
export default AddCharts;
