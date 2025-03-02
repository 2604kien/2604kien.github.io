import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMyBabyData } from "../../reducers/myBabySlice";
export default function FoodCard(props){
    const dispatch=useDispatch();
    const foodId=useSelector(state=>state.mybaby.entities.foodId);
    const dateData=useSelector(state=> state.mybaby.entities)
    const submit=()=>{
        dispatch(addToMyBabyData({
            ...dateData,
            foodId:props.id,
            food:props.food
        }))
    }
    
    return (
        <div style={{
            border:"1px solid black",
            padding:"5px 15px",
            borderRadius:"15px",
            backgroundColor:Number(foodId)===Number(props.id)?"black":"white",
            color:Number(foodId)===Number(props.id)?"white":"black"
        }}
        onClick={submit}>
            <h5>{props.food}</h5>
        </div>
    )
}