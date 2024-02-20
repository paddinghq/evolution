import { UserState } from './userSlice'

export interface RootState {
  auth: any
  AuthState: {
    loading: boolean
    submitting: boolean
    showPassword: boolean
    userDetails: string[]
  }

  bioData: {
    dob: string
    gender: string
    maritalStatus: string
    kids: string
    health: string
    disability: string
    locate: string
    hobbies: string[]
    loading: boolean
  }
  user: UserState
}
