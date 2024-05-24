import { useEffect, useState } from "react";


const ThreeTable=()=>{
    const[count,setCount]=useState(3)
    



    const HandleIncrement=()=>{
        useEffect(()=>{
       setTimeout(()=>{
        setCount(count+3)
       },3000)

        },[])
        
    }
    return(
        <>
        <h2>{count}</h2>
        <button onClick={HandleIncrement}>Click to add</button>
        </>
    )
}
export default ThreeTable;