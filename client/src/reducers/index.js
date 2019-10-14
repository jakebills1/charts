import { combineReducers } from "redux";
import charts from "./charts";
import playlists from "./playlists";
import user from "./user";
const rootReducer = combineReducers({
  charts,
  playlists,
  user
});
export default rootReducer;
