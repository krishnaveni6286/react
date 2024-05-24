import { useEffect, useState } from "react";



const UseEffectEx2=()=>{

    const[count,setCount]=useState(0)


    useEffect(()=>{
    updateCounterValue()        

    },[count])
    //here we passed dependcy array so its upadting title also count increasing in title also
    //we can also give more dependency array

    const updateCounterValue=()=>{
       
        document.title=`Counter Value ${count}`
    }

    const handleIncrement=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h2>use state example {count}</h2>
        <button onClick={handleIncrement}>Click to update the count</button>
    </>
    )

}
export default UseEffectEx2;