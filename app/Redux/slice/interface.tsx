export interface RootState {
  auth: {
    loading: boolean
    submitting: boolean
    showPassword: boolean
  },
  editbioData: {
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
}
