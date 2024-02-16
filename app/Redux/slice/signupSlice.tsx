

import { createSlice, PayloadAction } from '@reduxjs/toolkit'



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    submitting: false,
    showPassword: false,
  },

  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      state.submitting = action.payload
    },
    setShowPassword: (state, action: PayloadAction<boolean>) => {
      state.showPassword = action.payload
    },
  },
})

export const { setLoading, setSubmitting, setShowPassword} = authSlice.actions
export default authSlice.reducer
