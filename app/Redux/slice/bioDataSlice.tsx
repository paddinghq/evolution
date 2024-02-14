import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	bioData: {
        dob: "",
        gender: "",
        maritalStatus: "",
		kids: "",
        health: "",
        disability: "",
        locate: "",
        hobbies: []
	},
	steps: 1,
	loading: false
};

export const BioSlice = createSlice({
    name: "bioData",
    initialState, 
    reducers:{
        setBioData: (state, action) => {
            state.bioData = {...state.bioData, ...action.payload}
        },
        setSteps: (state, action) => {
            state.steps = state.steps +1
        },
        decrementSteps: (state) => {
			if (state.steps > 0) {
				state.steps = state.steps - 1;
			}
		},
    }
})


export const {
    setBioData,
    setSteps,
	decrementSteps,
} = BioSlice.actions;


export default BioSlice.reducer