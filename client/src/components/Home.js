import React, { useState, useEffect } from "react";
import Charts from "./Charts";
import AddCharts from "./AddCharts";
import Search from "./Search";
import axios from "axios";
const Home = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    console.log("useEffect fired");
    axios.get("/api/charts").then(res => {
      setCharts(res.data);
    });
  }, [setCharts]);
  const updateCharts = chart => {
    setCharts([...charts, chart]);
  };
  return (
    <div>
      <h1>Home</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Search charts={charts} />
        {/* <Charts charts={charts} /> */}
        <AddCharts updateCharts={updateCharts} />
      </div>
    </div>
  );
};
export default Home;
