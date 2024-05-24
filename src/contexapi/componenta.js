import React from "react"
import{ useState } from "react"
import ComponentB from "./componentb"

   
  
  
  function ComponentA(){
    const [name,setName]=useState("apple")
    return(
       <div>
          <ComponentB name={name}/>
       </div>
      
    )
   }
   export default ComponentA