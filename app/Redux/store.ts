import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
import EditBioSlice from './slice/updateProfileSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    updateProfile: EditBioSlice,
  },
})

export default store
