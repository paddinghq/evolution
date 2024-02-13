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
        hobbies: ""
	},
	steps: 1,
	loading: false
};

export const BioSlice = createSlice({
    name: "bioData",
    initialState, 
    reducers:{
        
    }
})