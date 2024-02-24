import { createSlice,PayloadAction } from '@reduxjs/toolkit'

const initialState = {
 eventDetails: []
}

export const EventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEventDetails: (state, action:PayloadAction<string[]>) => {
      state.eventDetails = state.eventDetails, action.payload 
    },
    
   
  },
})

export const { setEventDetails } = EventSlice.actions

export default EventSlice.reducer
