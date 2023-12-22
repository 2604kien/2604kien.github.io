import { combineReducers } from "@reduxjs/toolkit";
import projectSlice from "./projectSlice";
export const rootReducer=combineReducers({
    project: projectSlice
})