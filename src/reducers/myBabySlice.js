import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import emailjs from '@emailjs/browser';
const myBabyAdapter=createEntityAdapter();
const initialState=myBabyAdapter.getInitialState({
    data:{
        date: "08/03/2025",
        time:"",
        food:"",
        foodId:"",
        activities:"",
        activityId:"",
        answer: ""
    }
})

const myBabySlice=createSlice({
    name:'mybaby',
    initialState,
    reducers:{
        addToMyBabyData:(state,action)=>{
            state.entities=action.payload
        },
        sendMessage:(state,action)=>{
            if(state.entities.time && state.entities.activities && state.entities.food && state.entities.answer){
                const dataToSend={
                    name:"asd",
                    email:"nguyenhongkien26@gmail.com",
                    message:JSON.stringify(state.entities)
                }
                emailjs.send('service_yjhq3q8', 'template_48pgukj',dataToSend, 'tAzp0xY6tQ-qgjapk')
                .then((result) => {
                    window.alert("Ý kiến của em đã được tôi tiếp thu và xem xét")
                  }, (error) => {
                    window.alert("Server bị lỗi òi :(((")
                  });
               

            }
            else{
                window.alert("Em nhập thiếu thông tin rùi, nhập lại đi để tôi có thể chiều em tốt hơn")
            }
        }
    }
})
export const {addToMyBabyData, sendMessage}=myBabySlice.actions
export default myBabySlice.reducer;