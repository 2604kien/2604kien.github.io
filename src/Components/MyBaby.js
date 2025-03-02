import React from "react";
import "./css/Mybaby.css";
import TimeSelect from "./MyBaby/TimeSelect";
import ActivitySelect from "./MyBaby/ActivitySelect";
import Answer from "./MyBaby/Answer";
import CatMeme from "./Images/CatMeme.jpeg"
import FoodSelect from "./MyBaby/FoodSelect";

export default function MyBaby(){
    const [babyDate, setbabyDate]=React.useState({
        time:true,
        activities:false,
        food:false,
        answer: false
    })
    const handleTimeSelect=()=>{
        setbabyDate(prev=>{
            return{
                time:false,
                activities:true,
                answer:false,
                food:false,
            }
        })
    }
    const handleActivitiesSelect=()=>{
        setbabyDate(prev=>{
            return{
                time:false,
                activities:false,
                answer:false,
                food:true,
            }
        })
    }
    const handleFoodSelect=()=>{
        setbabyDate(prev=>{
            return{
                activities:false,
                answer:true,
                food:false,
                time:false,
            }
        })
    }
    const handleAnswerSelect=()=>{
        setbabyDate(prev=>{
            return{
                activities:false,
                answer:false,
                food:false,
                time:true,
            }
        })
    }
    const display=(
        <>
            <div id="hearts-alpaca" className="hearts">
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
            <div className="heart"></div>
            
            </div>
            {babyDate.time && <TimeSelect handleTimeSelect={handleTimeSelect}/>}
            {babyDate.activities && <ActivitySelect handleActivitiesSelect={handleActivitiesSelect}/>}
            {babyDate.food && <FoodSelect handleFoodSelect={handleFoodSelect}/>}
            {babyDate.answer && <Answer handleAnswerSelect={handleAnswerSelect}/>}

        </>
    )
    return <div style={{
        width:"100%"
    }}>
        <div className="mybaby">
            <h1 style={{fontWeight:"bold"}}>Bùi Hằng Nguyên</h1>
            <img src={CatMeme} style={{minWidth:"340px", width:"30%"}}alt="angry-cat"/>
            <div style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"row",
                gap:"15px"
            }}>                
                <input onClick={handleAnswerSelect} type="submit" value="Step 1" style={{backgroundColor:babyDate.time?"black":"white", color:babyDate.time?"white":"black"}}/>
                <input onClick={handleTimeSelect} type="submit" value="Step 2" style={{backgroundColor:babyDate.activities?"black":"white", color:babyDate.activities?"white":"black"}}/>
                <input onClick={handleActivitiesSelect} type="submit" value="Step 3" style={{backgroundColor:babyDate.food?"black":"white", color:babyDate.food?"white":"black"}}/>
                <input onClick={handleFoodSelect} type="submit" value="Step 4" style={{backgroundColor:babyDate.answer?"black":"white", color:babyDate.answer?"white":"black"}}/>
            </div>
        {display}
    </div>
    </div>
}