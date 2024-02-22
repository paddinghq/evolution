
export interface RootState {
  auth: any
  AuthState: {
    loading: boolean
    submitting: boolean
    showPassword: boolean
    userDetails: string[]
  }

  bioData: {
    dateOfBirth: string
    gender: string
    maritalStatus: string
    kids: string
    health: string
    disability: string
    disabilityStatus: string
    locate: string
    hobbies: string[]
    loading: boolean
  }
}
