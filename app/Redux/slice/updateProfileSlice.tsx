import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  loading: false,
  error: null,
}
const updateProfileSlice = createSlice({
  name: 'profifle',
  initialState,
  reducers: {
    updateProfileRequest: (state) => {
      state.loading = true
      state.error = null
    },
    updateProfileSuccess: (state) => {
      state.loading = false
      state.user = action.payload
    },
    updateProfileFailure: (state) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
} = updateProfileSlice.actions
export default updateProfileSlice.reducer
