import React from "react";
import { useDispatch} from "react-redux";
import { sendMessage } from "../../reducers/myBabySlice";
import AnswerCard from "./AnswerCard";
export default function Answer(props){
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(sendMessage());
        props.handleAnswerSelect();
    }

    const answerList=["Hong :((","Có <3"];
    const element=answerList.map((el,i)=> <AnswerCard answer={el} id={i} key={i}/>)
    return (
        <div>
            <form  style={{
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                alignItems:"center",
                padding:"20px",
            }} onSubmit={handleSubmit}>
            <label htmlFor="name">Em có iu anh hong :))) </label>
            {element}
            <input type="submit" value="Submit" style={{scale:"1.5"}}/>
            </form>
        </div>
    )
}