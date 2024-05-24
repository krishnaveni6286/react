import { useState } from "react"


const UseStateExample=()=>{
    const[currentvalue,updateFunction]=useState(0)
    return(
        <>
        <h2>UseStateExample{currentvalue}</h2>
        </>
    )
}
export default UseStateExample;