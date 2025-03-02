import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToMyBabyData } from "../../reducers/myBabySlice";
export default function AnswerCard(props){
    const dispatch=useDispatch();
    const answerId=useSelector(state=>state.mybaby.entities.answerId);
    const dateData=useSelector(state=> state.mybaby.entities)
    const [isClick, setIsClick]=React.useState(false)
    const submit=()=>{
        setIsClick(true)
        if(props.answer==="Hong :(("){
            window.alert("Option này đã bị vô hiệu hóa, baby vui lòng chọn option khác :)))")
        }
        if (props.answer==="Có <3"){
            dispatch(addToMyBabyData({
                ...dateData,
                answerId:props.id,
                answer:props.answer
            }))
        }
    }
    
    return (
        <div style={{
            border:"1px solid black",
            padding:"5px 15px",
            borderRadius:"15px",
            backgroundColor:(props.answer==="Hong :((" &&isClick)?"#EBEBE4":Number(answerId)===Number(props.id)?"black":"white",
            color:props.answer==="Hong :(("&&isClick?"black":Number(answerId)===Number(props.id)?"white":"black"
        }}
        onClick={submit}>
            <h5>{props.answer}</h5>
        </div>
    )
}