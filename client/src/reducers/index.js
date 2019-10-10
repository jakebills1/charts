import { combineReducers } from "redux";
import charts from "./charts";
import playlists from "./playlists";
const rootReducer = combineReducers({
  charts,
  playlists
});
export default rootReducer;
