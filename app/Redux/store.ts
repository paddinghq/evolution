import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
import BioData from './slice/bioDataSlice'
import AuthReducer from './slice/signinSlice'
import EventDetails from './slice/eventSlice'

import userReducer from './slice/userSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: userReducer,
    bioData: BioData,
    event:EventDetails
  },
})

export type AppDispatch = typeof store.dispatch
export default store
