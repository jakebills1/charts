import React from "react";
import AddCharts from "./AddCharts";
import Search from "./Search";
import Playlists from "./Playlists";
import Charts from "./Charts";
import { connect } from "react-redux";
import { getCharts } from "../actions";
import { getPlaylists } from "../actions";
class Home extends React.Component {
  componentDidMount() {
    this.props.getCharts();
    this.props.getPlaylists();
  }
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
          <AddCharts playlists={playlists} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { charts: state.charts, playlists: state.playlists };
};
const actions = { getCharts, getPlaylists };
export default connect(
  mapStateToProps,
  actions
)(Home);
