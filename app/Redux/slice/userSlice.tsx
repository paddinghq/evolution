// userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export  interface User {
  id: string
  name: string
  dateOfBirth: string
  gender: string
  maritalStatus: string
  email: string
  mobile: string
  hobbies: []
  medicalCondition: []
  avatar: string
}

export interface UserState {
  token: string
  user: User | null
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  token: '',
  user: null,
  loading: false,
  error: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserStart(state) {
            state.loading = true;
            state.error = null;
          },
          fetchUserSuccess(state, action: PayloadAction<User>) {
            state.loading = false;
            state.user = action.payload;
          },
          fetchUserFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
          },
        },
    }
)




export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions
export default userSlice.reducer
