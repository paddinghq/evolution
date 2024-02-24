
export interface RootState {
  auth: any
  AuthState: {
    loading: boolean
    submitting: boolean
    showPassword: boolean
    userDetails: string[]
    event: string[]
    token: string
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
  },
  event: {
    eventDetails: string[]
  }
}
