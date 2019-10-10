import React, { useState, useEffect } from "react";
import AddCharts from "./AddCharts";
import Search from "./Search";
import axios from "axios";
import Playlists from "./Playlists";
import Charts from "./Charts";
import { connect } from "react-redux";
import { getCharts } from "../reducers/charts";
import { getPlaylists } from "../reducers/playlists";
class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCharts());
    this.props.dispatch(getPlaylists());
  }
  // const updateCharts = chart => {
  //   setCharts([...charts, chart]);
  // };
  render() {
    const { charts, playlists } = this.props;
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
  return { charts: state.charts, playlists: state.playlists };
};
export default connect(mapStateToProps)(Home);
