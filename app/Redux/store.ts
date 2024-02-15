import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
import updateProfileReducer from './slice/updateProfileSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    updateProfile: updateProfileReducer,
  },
})

export default store
