import { useEffect, useState } from "react";


const UseEffectEx3=()=>{
    const [count,setCount]=useState(0)
    
    useEffect(()=>{
        DomManipulation()
       

    },[])

    const DomManipulation=()=>{
        document.title=`current count ${count}`

    }
    const handelCount=()=>{
         setCount(count+1)
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={handelCount}>click</button>
        </>
    )
}
export default UseEffectEx3;