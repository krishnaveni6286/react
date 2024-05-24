import { useState } from "react"




const UseStateExample=()=>{


    const[currentValue,updateFunction]=useState(0)
    const handleIncrement=()=>{
        updateFunction(currentValue+1)
    }

    return(
        <>
        <h2>usestate Exapmple {currentValue}</h2>
        <button onClick={handleIncrement}>Click to increment</button>
        </>
    )
}
export default UseStateExample