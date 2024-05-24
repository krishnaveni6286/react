import { useState } from "react";





// const UseStateEx=()=>{
//     const initialValue=0
//    const[count,setCount] =useState(initialValue)


//    const handleIncrement=()=>{
//     setCount(count+1)
//    }

//     return(
//         <>
//         <h2>use state example {count}</h2>
//         <button onClick={handleIncrement}>Click to increment</button>
//         </>
//     )
// }
// export default UseStateEx;


const UseStateEx=()=>{
    const initialValue=0
   const[count,setCount] =useState(initialValue)
   const[timer,setTimer]=useState(100)


   const handleIncrement=()=>{
    setCount(count+1)
   }

   const handleTimer=()=>{
    setInterval(()=>{

        if(timer==0){
            alert("timeUp")
        }
        else{
            setTimer(timer=>timer-1)         
        }
   
    },1000)
   }

    return(
        <>
        <h2>use state example {count}</h2>
        <h2 style={{color:timer>50?"black":"red"}}>timer --{timer}</h2>
        <button onClick={handleIncrement}>Click to increment</button>
        <button onClick={handleTimer}>Click to start timer</button>
        </>
    )
}
export default UseStateEx;