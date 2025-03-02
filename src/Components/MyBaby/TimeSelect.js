import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMyBabyData } from "../../reducers/myBabySlice";
export default function TimeSelect(props){
    const dateData=useSelector(state=>state.mybaby.entities)
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.handleTimeSelect();
        dispatch(addToMyBabyData({
            ...dateData,
            time:time
        }))
    }
    
    const dispatch=useDispatch()
    const [time,setTime]=React.useState(dateData.time?dateData.time:"")
    const handleChange=(e)=>{
        const {value}=e.target;
        setTime(prev=>value);
        dispatch(addToMyBabyData({
            ...dateData,
            time:value
        }))
    }
    return (
        <div>
            <form  style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                alignItems:"center",
                padding:"20px"
            }} onSubmit={handleSubmit}>
            <div style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"row"
            }}>
                <label htmlFor="name">Em muốn gặp tôi vào lúc mấy h:</label>
                <input id="time" onChange={handleChange} value={time} className="time" type="time" placeholder="Please enter your name." name="name" required/>
            </div>
            <input type="submit" value="Next" style={{scale:"1.5"}}/>
            </form>
        </div>
    )
}