import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { addContact, delContact } from "./contacts-item-actions";

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => {
    const { name, number } = payload;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    return [...state, contact];
  },
  [delContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

export default itemsReducer;
