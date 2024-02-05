"use client"
import { configureStore } from "@reduxjs/toolkit";
import CreateEventSlice from "./createEventSlice";


const store = configureStore({
  reducer: {
    createEvent: CreateEventSlice.reducer,
  },
});

export default store;
