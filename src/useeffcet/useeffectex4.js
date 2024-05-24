import { useEffect, useState } from "react";


const UseEffectEx4=()=>{
     const [x,setX]=useState(null)
     const [y,setY]=useState(null)

    useEffect(()=>{
        window.addEventListener("mousemove",callbackFunction)

        return()=>{
            // clean the component by preventing memory leak
            window.removeEventListener("mousemove",callbackFunction)
        }
    },[])
    const callbackFunction=(event)=>{
        setX(event.clientX)
        setY(event.clientY)
        console.log(event.clientX)
        console.log(event.clientY)
    }
    return(
        <>
        <h2>hello</h2>
       
        <h1>X position {x}</h1>
        <h1>Y position {y}</h1>
        </>
    )
}
export default UseEffectEx4;