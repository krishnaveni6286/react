import { useState } from "react";


const UseStateObj=()=>{
    const [current,setCurrent]=useState([
        {
            name:"hi",
            salary:500,
            id:1
        },
        {
            name:"hello",
            salary:900,
            id:2
        }
    ])
   const handleIncrement=(data)=>{
        console.log(data)

    }
   const handleDecrement=(data)=>{
        console.log(data)
    }
    return(
        <>
        {
            current.map(value=><>
            <h2>{value.name}</h2>
            <h2>{value.salary}</h2>
            <button onClick={()=>handleIncrement(value)}>increment Salary</button>
            <button onClick={()=>handleDecrement(value)}>decrement salary</button>
            </>)
        }
        </>

    )
}
export default UseStateObj;