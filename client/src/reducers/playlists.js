import axios from "axios";
export const getPlaylists = () => {
  return dispatch => {
    axios
      .get("/api/playlists")
      .then(res => dispatch({ type: "PLAYLISTS", playlists: res.data }));
  };
};
const playlists = (state = [], action) => {
  switch (action.type) {
    case "PLAYLISTS":
      return action.playlists;
    default:
      return state;
  }
};
export default playlists;
