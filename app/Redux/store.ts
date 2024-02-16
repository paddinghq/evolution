import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
import BioData from './slice/bioDataSlice'
import AuthReducer from './slice/signinSlice'

import userReducer from './slice/userSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: userReducer,
    bioData: BioData,
  },
})

export type AppDispatch = typeof store.dispatch
export default store
