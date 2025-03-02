import React from "react";
import FoodCard from "./FoodCard";
export default function FoodSelect(props){
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.handleFoodSelect();
    }

    const foodList=["Đồ Việt", "Đồ Hàn", "Đồ Thái", "Đồ Nhật", "Đồ Trung"]
    const element=foodList.map((el,i)=> <FoodCard food={el} id={i} key={i}/>)
    return (
        <div>
            <form  style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                alignItems:"center",
                padding:"20px"
            }} onSubmit={handleSubmit}>
            <label htmlFor="name">Mình sẽ đi ăn gì đây: </label>
            {element}
            <input type="submit" value="Next" style={{scale:"1.5"}}/>
            </form>
        </div>
    )
}