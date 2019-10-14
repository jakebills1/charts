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
export const getPlaylists = () => {
  return dispatch => {
    axios
      .get("/api/playlists")
      .then(res => dispatch({ type: "PLAYLISTS", playlists: res.data }));
  };
};
export const login = user => {
  return dispatch => {
    axios
      .post("/api/auth/sign_in", user)
      .then(res => dispatch({ type: actionTypes.login, user: res.data.data }));
  };
};
export const logout = () => {
  return dispatch => {
    axios
      .delete("/api/auth/sign_out")
      .then(() => dispatch({ type: actionTypes.logout, user: null }));
  };
};
export const register = user => {
  return dispatch => {
    axios
      .post("/api/auth", user)
      .then(res =>
        dispatch({ type: actionTypes.register, user: res.data.data })
      );
  };
};
export const actionTypes = {
  charts: "CHARTS",
  addCharts: "ADD_CHART",
  deleteChart: "DELETE_CHART",
  playlists: "PLAYLISTS",
  login: "USER_LOGIN",
  logout: "USER_LOGOUT",
  register: "USER_REGISTER"
};
