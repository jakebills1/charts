import React, { useState, useEffect } from "react";
import AddCharts from "./AddCharts";
import Search from "./Search";
import axios from "axios";
import Playlists from "./Playlists";
const Home = () => {
  const [charts, setCharts] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    axios.get("/api/charts").then(res => {
      setCharts(res.data);
    });
    axios.get("/api/playlists").then(res => {
      setPlaylists(res.data);
    });
  }, [setCharts, setPlaylists]);
  const updateCharts = chart => {
    setCharts([...charts, chart]);
  };
  return (
    <div>
      <h1>Home</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Playlists playlists={playlists} />
        <Search charts={charts} />
        {/* <Charts charts={charts} /> */}
        <br />
        <br />
        <AddCharts updateCharts={updateCharts} playlists={playlists} />
      </div>
    </div>
  );
};
export default Home;
