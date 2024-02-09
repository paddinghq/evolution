import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
})

export default store
