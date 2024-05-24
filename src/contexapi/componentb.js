import React from "react"
import ComponentC from "./componentc"

   
  
  
  function ComponentB({name}){
    
    return(
       <div><ComponentC name={name}/></div>
    )
   }
   export default ComponentB