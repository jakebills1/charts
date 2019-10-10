import axios from "axios";
export const getCharts = () => {
  return dispatch => {
    axios
      .get("/api/charts")
      .then(res => dispatch({ type: actionTypes.charts, charts: res.data }));
  };
};
export const addChart = chart => {
  return dispatch => {
    axios
      .post("/api/charts", chart)
      .then(res => dispatch({ type: actionTypes.addCharts, chart: res.data }));
  };
};
const actionTypes = {
  charts: "CHARTS",
  addCharts: "ADD_CHART"
};
const charts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.charts:
      return action.charts;
    case actionTypes.addCharts:
      return [...state, action.chart];
    default:
      return state;
  }
};
export default charts;
