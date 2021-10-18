import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts";
import { loadContacts, saveContacts } from "../components/utils/storage";

const persistedState = {
  contacts: {
    items: loadContacts(),
  },
};

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  preloadedState: persistedState,
  devTools: process.env.NODE_ENV === "development",
});

store.subscribe(() => {
  saveContacts(store.getState().contacts.items);
});

export default store;
