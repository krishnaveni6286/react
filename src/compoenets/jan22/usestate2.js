import { useState } from "react"




const UseStateExample=()=>{
    
        const initialValue=0
    const[count,setCount]=useState(initialValue)
    const [timer,setTimer]=useState(0)

    const handleIncrement=()=>{
        setCount(count+1)
    }

    const handleTimer=()=>{
        setInterval(()=>{
        setTimer(timer=>timer+1)
        },1000)
    } 

    return(
        <>
        <h2>usestate Exapmple {count}</h2>
        <h2>timer ---{timer}</h2>
        <button onClick={handleIncrement}>Click to increment</button>
        <button onClick={handleTimer}>Click to start timer</button>
        
        </>
    )
}
export default UseStateExample