import { actionTypes } from "../actions";
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
