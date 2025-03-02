import React from "react";
import ActivityCard from "./ActivityCard";
export default function ActivitySelect(props){
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.handleActivitiesSelect();
    }
    const activityList=["Đi Karaoke Beer","Đi Sealife", "Đi ăn + Cocktail Bar","Đi biển", "Đi Luna Park", "Đi bảo tàng / triển lãm", "Đếch đi đâu hết, nằm nhà ôm nhau"]
    const element=activityList.map((el,i)=> <ActivityCard activity={el} id={i} key={i}/>)
    return (
        <div>
            <form style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                alignItems:"center",
                padding:"20px"
            }} onSubmit={handleSubmit}>
            <label htmlFor="name">Mình sẽ đi chơi gì nào :))) </label>
            {element}
            <input type="submit" value="Next" style={{scale:"1.5"}}/>
            </form>
        </div>
    )
}