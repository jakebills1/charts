import axios from "axios";
export const getCharts = () => {
  return dispatch => {
    axios
      .get("/api/charts")
      .then(res => dispatch({ type: actionTypes.charts, charts: res.data }));
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
      return [action.chart, ...state];
    default:
      return state;
  }
};
export default charts;
