import axios from "axios";
import { useEffect, useState } from "react";



const UseEffectTsk=()=>{

    
    const [count,setCount]=useState(0)
    const[data,setData]=useState(0)

    useEffect(()=>{
          fetchData()
    },[])
    const fetchData= async ()=>{
       let result=await axios.get("https://dummyjson.com/products")
       setData(result.data.products)

    }
    return(
        <>
        <h2>count--{count}</h2>
        <button onClick={()=>setCount(count+1)}>click</button>
      

{
   data.length>0
    ?
    data.map(item=>
    <h4>{item.title}</h4>
    )
    :
    null
}
        </>
    )

}
export default UseEffectTsk;