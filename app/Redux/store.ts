import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slice/signupSlice'
import BioData from './slice/bioDataSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    bioData: BioData,
  },
})

export default store
