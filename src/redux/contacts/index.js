import { combineReducers } from "redux";
import filterReducer from "./filter/contacts-filter-reducer";

export default combineReducers({
  filter: filterReducer,
});
