import { useEffect, useState } from "react";



const UseEffectEx1=()=>{
    const [counter,setCounter]=useState(0)
    const [counter1,setCounter1]=useState(10)

    useEffect(()=>{
        console.log("useEffect")
    },[counter])


   const counterHandler=()=>{
        setCounter(counter+1)
    }

    const counterHandler1=()=>{
        setCounter1(counter1+10)
    }
    return(
        <>
        <h1>hello</h1>
        <h3>counter  {counter}</h3>
        <button onClick={counterHandler}>increment</button>

        <h3>counter  {counter1}</h3>
        <button onClick={counterHandler1}>increment</button>
        </>
    )

}
export default UseEffectEx1;