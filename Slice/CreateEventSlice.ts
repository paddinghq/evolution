import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Event {
    data: any; 
    eventName: string; 
  }
  
  const initialState: Event = {
    data: [],
    eventName: ""
  };
  
  // creating action-reducer slice
  export const createEvent = createSlice({
    name: "createEvent_slice",
    initialState,
    reducers: {
    
      setEventName: (state, action: PayloadAction<string>) => {
        state.eventName = action.payload;
      },
    },
  });
  
  
  export const { setEventName } = createEvent.actions;
  
  export default createEvent.reducer;