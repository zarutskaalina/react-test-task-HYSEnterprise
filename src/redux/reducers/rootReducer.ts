import { combineReducers } from "redux";
import { notesReducer } from "./notesReducer";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
  notesBox: notesReducer,
  filter: filterReducer,
});

export default rootReducer;
