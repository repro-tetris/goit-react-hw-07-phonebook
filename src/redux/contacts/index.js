import { combineReducers } from "redux";
import itemsReducer from "./items/contacts-item-reducer";
import filterReducer from "./filter/contacts-filter-reducer";

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
