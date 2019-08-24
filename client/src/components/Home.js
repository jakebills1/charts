import React, { useState, useEffect } from "react";
import Charts from "./Charts";
import axios from "axios";
const Home = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("/api/charts");
      setCharts(result.data);
    }
    fetchData();
  }, [setCharts]);
  return (
    <div>
      <h1>Home</h1>
      <Charts charts={charts} />
    </div>
  );
};
export default Home;
