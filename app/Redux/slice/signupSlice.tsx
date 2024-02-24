import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  loading: boolean
  submitting: boolean
  showPassword: boolean
  userDetails: string[]
  event: string[]
  token: string
}

const initialState: AuthState = {
  loading: false,
  submitting: false,
  showPassword: false,
  userDetails: [],
  event: [],

  token: ""
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
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    setEvent: (state, action: PayloadAction<string[]>) => {
      state.event = action.payload
    },
  },
})

export const { setLoading, setSubmitting, setShowPassword, setUserDetails, setToken,setEvent } =
  authSlice.actions

export default authSlice.reducer
