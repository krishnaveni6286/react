import { useEffect } from "react";



const UseEffect3=()=>{
    useEffect(()=>{

        document.addEventListener("mousemove",mouseCapture)
        return()=>{
            document.removeEventListener("mousemove",mouseCapture)
        }
    },[])

    const mouseCapture=(event)=>{
       
        console.log(event.clientX,"Xposition capture")
        console.log(event.clientX,"Yposition capture")
    }
    return(
        <h2>useeffcet example 3</h2>

    )
}
export default UseEffect3;