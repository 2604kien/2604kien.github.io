import { combineReducers } from "@reduxjs/toolkit";
import projectSlice from "./projectSlice";
import mybaby from "./myBabySlice"
export const rootReducer=combineReducers({
    project: projectSlice,
    mybaby: mybaby
})