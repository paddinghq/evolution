import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
ft/signin-auth
import AuthReducer from './slice/signinSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice, AuthReducer
    

import userReducer from './slice/userSlice'


const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: userReducer,
 dev
  },
})

export type AppDispatch = typeof store.dispatch;
export default store
