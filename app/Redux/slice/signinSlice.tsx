import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: false,
    error: false,
    loading: false,
  },
  reducers: {
    signInRequest: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
      state.error = action.payload
    },
    signInSuccess: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
      state.user = action.payload
    },
    signInFailure: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
      state.error = action.payload
    },
  },
})

export const { signInRequest, signInSuccess, signInFailure } = authSlice.actions
export default authSlice.reducer