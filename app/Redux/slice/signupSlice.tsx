import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  loading: boolean
  submitting: boolean
  showPassword: boolean
  userDetails: string[]
}

const initialState: AuthState = {
  loading: false,
  submitting: false,
  showPassword: false,
  userDetails: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
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
    setUserDetails: (state, action: PayloadAction<string[]>) => {
      state.userDetails = action.payload
    },
  },
})

export const { setLoading, setSubmitting, setShowPassword, setUserDetails } =
  authSlice.actions

export default authSlice.reducer
