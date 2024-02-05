import { configureStore } from "@reduxjs/toolkit";
import CreateEventSlice from "./slice/createEventSlice";


const store = configureStore({
  reducer: {
    createEvent: CreateEventSlice.reducer,
  },
});

export default store;
