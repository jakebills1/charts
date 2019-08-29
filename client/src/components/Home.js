import React, { useState, useEffect } from "react";
import Charts from "./Charts";
import AddCharts from "./AddCharts";
import axios from "axios";
const Home = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    axios.get("/api/charts").then(res => {
      setCharts(res.data);
    });
  }, [setCharts]);
  return (
    <div>
      <h1>Home</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Charts charts={charts} />
        <AddCharts />
      </div>
    </div>
  );
};
export default Home;
