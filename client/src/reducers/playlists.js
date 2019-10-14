const playlists = (state = [], action) => {
  switch (action.type) {
    case "PLAYLISTS":
      return action.playlists;
    default:
      return state;
  }
};
export default playlists;
