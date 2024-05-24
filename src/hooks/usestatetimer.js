import { useState } from "react"


const TimerState=()=>{

    const[timer,setTimer]=useState(0)

    const handlerTime=()=>{
          
        setInterval(()=>{
            setTimer(timer=>timer+1) //we have to pass it multiple times
        },1000)
    }
    return(
        <>
       <h2>{timer}</h2>
       <button onClick={handlerTime}>click to start timer</button>
        </>
    )

}
export default TimerState;