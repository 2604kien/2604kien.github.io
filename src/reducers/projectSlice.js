import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const projectAdapter=createEntityAdapter();
const initialState=projectAdapter.getInitialState({
    isClicked: false
});

const projectSlice= createSlice({
    name: 'project',
    initialState: initialState,
    reducers:{
        addToProjectDisplay:(state, action)=>{
            state.entities=action.payload;
        },
        setIsClick: (state, action)=>{
            state.isClicked=action.payload;
        }
    }
})
export const {addToProjectDisplay, setIsClick} = projectSlice.actions
export default projectSlice.reducer;