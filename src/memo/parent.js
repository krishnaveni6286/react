import { useState } from "react";
import Child from "./child";


function ParentMemo(){
    const [counter,setCounter]=useState(0)
    return(
        <>
        <h3>{counter}</h3>
        <button onClick={()=>setCounter(counter+1)}>count increment</button>
        <Child/>
        </>
    )

}
export default ParentMemo;

