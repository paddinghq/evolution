import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
import AuthReducer from './slice/signinSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice, AuthReducer
    
  },
})

export default store
