import { useRef } from "react";



const UnControlled =()=>{
  const usernameRef=useRef(null)
  const passwordRef=useRef(null)
   
 const handleFocus=()=>{
  console.log("focus me",usernameRef.current)
 }

 const handleSubmit =(event)=>{
  event.preventDefault()
  const username=usernameRef.current.value
 const password=passwordRef.current.value

  if(username.length>5){
    alert("enter less than 5 charecters")
  }
 
    
  }

 
  return(
    <>
    <h1>Uncontrolled from</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" ref={usernameRef}/>
      <input type="password" name="username" ref={passwordRef}/>
      <input type="submit" />
    </form>
    </>
  )
}
export default UnControlled;