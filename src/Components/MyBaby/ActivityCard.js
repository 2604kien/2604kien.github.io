import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMyBabyData } from "../../reducers/myBabySlice";
export default function ActivityCard(props){
    const dispatch=useDispatch();
    const activityId=useSelector(state=>state.mybaby.entities.activityId);
    const dateData=useSelector(state=> state.mybaby.entities)
    const submit=()=>{
        dispatch(addToMyBabyData({
            ...dateData,
            activityId:props.id,
            activities:props.activity
        }))
    }
    return (
        <div style={{
            border:"1px solid black",
            padding:"5px 15px",
            borderRadius:"15px",
            backgroundColor:Number(activityId)===Number(props.id)?"black":"white",
            color:Number(activityId)===Number(props.id)?"white":"black"
        }}
        onClick={submit}>
            <h5>{props.activity}</h5>
        </div>
    )
}