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
export const deleteChart = id => {
  return dispatch => {
    axios
      .delete(`/api/charts/${id}`)
      .then(() => dispatch({ type: actionTypes.deleteChart, id: id }))
      .catch(res => alert("that didnt work"));
  };
};
const actionTypes = {
  charts: "CHARTS",
  addCharts: "ADD_CHART",
  deleteChart: "DELETE_CHART"
};
const charts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.charts:
      return action.charts;
    case actionTypes.addCharts:
      return [...state, action.chart];
    case actionTypes.deleteChart:
      return state.filter(chart => chart.id !== action.id);
    default:
      return state;
  }
};
export default charts;
