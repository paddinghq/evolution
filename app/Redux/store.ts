import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
import userReducer from './slice/userSlice'


const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export default store
