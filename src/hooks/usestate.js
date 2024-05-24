import { useState } from "react";




const UseStateEx1=()=>{
  const[counter,setCounter]=useState(0)

  const counterIncrement=(val)=>{
    setCounter(counter+val )
    
  }

  const counterDecrement=(val)=>{
    setCounter(counter-val )
    
  }
   
  const counterReset=()=>{
    setCounter(0)
    
  }
   
    return(
        <>
        
       <h2>{counter}</h2>
       <button onClick={()=>counterIncrement(1)}>Increment</button>
        <button onClick={()=>counterDecrement(1)}>Decrement</button>
        <button onClick={counterReset}>Reset</button>
        </>
    )
}
export default UseStateEx1;