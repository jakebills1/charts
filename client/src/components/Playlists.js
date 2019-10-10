import React from "react";
const Playlists = ({ playlists }) => {
  return (
    <>
      <h2>Your Setlists</h2>
      <ul>
        {playlists.map(pl => (
          <li key={pl.id} onClick={() => revealSongs(pl.id)}>
            {pl.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Playlists;
const revealSongs = id => {
  debugger;
};
