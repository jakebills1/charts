import { actionTypes } from "../actions";
const user = (state = null, action) => {
  switch (action.type) {
    case actionTypes.login:
    case actionTypes.register:
    case actionTypes.logout:
      return action.user;
    default:
      return state;
  }
};
export default user;
