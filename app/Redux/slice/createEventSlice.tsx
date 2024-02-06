import { createSlice } from '@reduxjs/toolkit'

const CreateEventSlice = createSlice({
  name: 'createEvent',
  initialState: {
    eventName: '',
  },
  reducers: {
    setEventName: (state, action) => {
      state.eventName = action.payload
    },
  },
})

export const CreateEvent = CreateEventSlice.actions

export default CreateEventSlice
