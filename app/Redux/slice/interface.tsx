import { UserState } from "./userSlice"

export interface RootState {
  auth: {
    loading: boolean
    submitting: boolean
    showPassword: boolean
  }
  user: UserState;
}
