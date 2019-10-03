import React from "react";
const Playlists = ({ playlists }) => {
  return (
    <ul>
      {playlists.map(pl => (
        <li>{pl.name}</li>
      ))}
    </ul>
  );
};
export default Playlists;
