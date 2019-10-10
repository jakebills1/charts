import React from "react";
import Dropzone from "react-dropzone";
import { addChart } from "../reducers/charts";
import { connect } from "react-redux";
class AddCharts extends React.Component {
  state = {
    formValues: {
      name: "",
      artist: "",
      genre: "",
      group: "",
      file: "",
      playlist: ""
    },
    buttonVisible: false,
    newPlaylist: false
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
    data.append("playlist", formValues.playlist);
    this.props.dispatch(addChart(data));
    this.setState({
      formValues: {
        name: "",
        artist: "",
        genre: "",
        group: "",
        file: "",
        playlist: ""
      },
      buttonVisible: false
    });
  };
  render() {
    const {
      formValues: { name, artist, group, genre, playlist },
      buttonVisible,
      newPlaylist
    } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Dropzone onDrop={this.onDrop} multiple={false}>
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
          </div>
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
          <label htmlFor="playlist_select">Add to a Playlist:</label>
          <select
            name="playlist"
            id="playlist_select"
            value={playlist}
            onChange={e =>
              this.setState({
                formValues: {
                  ...this.state.formValues,
                  playlist: e.target.value
                },
                newPlaylist: e.target.value === "new_playlist" ? true : false
              })
            }
          >
            <option value="" disabled selected>
              Pick an option:
            </option>
            <option value="new_playlist">New Playlist</option>
            {this.props.playlists.map(pl => (
              <option value={pl.name}>{pl.name}</option>
            ))}
          </select>
          {newPlaylist && (
            <>
              <label htmlFor="new_playlist_input">New Playlist Name:</label>
              <input
                id="new_playlist_input"
                placeholder="Playlist name"
                value={playlist}
                onChange={e =>
                  this.setState({
                    formValues: {
                      ...this.state.formValues,
                      playlist: e.target.value
                    }
                  })
                }
              />
            </>
          )}
          {buttonVisible && <button type="submit">Submit</button>}
        </form>
      </div>
    );
  }
}
export default connect()(AddCharts);
