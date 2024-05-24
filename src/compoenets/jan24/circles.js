import { useState } from "react"



const CirclesAdd=()=>{
    const [circles,setCircles]=useState([])
    const addCircles=()=>{
        setCircles([...circles,false])
    }

    const circleClick=(index)=>{
        console.log(index)
        console.log(circles)

    }
    return(
      <>
      <button onClick={addCircles}>Add circles</button>
      <h2>total circles{circles.length}</h2>{

        circles.map((value,index)=>
        <div key={index} style={{width:100,height:100,borderRadius:"50%" ,border:"1px solid black"}} onClick={()=>circleClick(index)}>

        </div>
        )
      }
      </>
        
        
    )
}
export  default CirclesAdd