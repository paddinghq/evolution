import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  editbioData: {
    dob: '',
    gender: '',
    maritalStatus: '',
    kids: '',
    health: '',
    disability: '',
    location: '',
    hobbies: [],
  },
  steps: 1,
  loading: false,
}

export const EditBioSlice = createSlice({
  name: 'editbioData',
  initialState,
  reducers: {
    setBioData: (state, action) => {
      state.editbioData = { ...state.editbioData, ...action.payload }
    },
    setSteps: (state) => {
      state.steps = state.steps + 1
    },
    decrementSteps: (state) => {
      if (state.steps > 0) {
        state.steps = state.steps - 1
      }
    },
  },
})

export const { setBioData, setSteps, decrementSteps } = EditBioSlice.actions

export default EditBioSlice.reducer