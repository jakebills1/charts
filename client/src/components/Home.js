import React, { useState, useEffect } from "react";
import AddCharts from "./AddCharts";
import Search from "./Search";
import axios from "axios";
import Playlists from "./Playlists";
import Charts from "./Charts";
import { connect } from "react-redux";
import { getCharts } from "../reducers/charts";
class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCharts());
  }
  // const updateCharts = chart => {
  //   setCharts([...charts, chart]);
  // };
  render() {
    const { charts } = this.props;
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
          {/* <Playlists playlists={playlists} /> */}
          <Search charts={charts} />
          <Charts charts={charts} />
          <br />
          <br />
          {/* <AddCharts updateCharts={updateCharts} playlists={playlists} /> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { charts: state.charts };
};
export default connect(mapStateToProps)(Home);
