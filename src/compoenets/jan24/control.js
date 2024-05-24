import { eventWrapper } from "@testing-library/user-event/dist/utils"
import { useState } from "react"


const Controlled =()=>{
    const[username,setUsername]=useState("")
    const[userNameError,setUserNameError]=useState("")
    const[password,setPassword]=useState("")

    const userNameHandler=(event)=>{
  
        setUsername(event.target.value)
        if(event.target.value.length>10){
            setUserNameError("enter value below 10 characters")
        }
        else{
            setUserNameError("")
        }

       console.log(event.target.value)
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
        console.log(event.target.value)
    }

//    function validatePassword(psw){
//     let msg='password is Ok (for 1,2,3,4)'

//     switch(true){
//         case (psw.length<8 || psw.length>13):
//             msg='1) bad password length'
//             break
//             case (!())
//    }
const submitHandle=(event)=>{
    event.preventDefault()

    //server hti
    const userDetails={
        username,
        password
    }
    console.log(userDetails,"userDetails")
}
    return(
        <>

<form onSubmit={submitHandle}>
  <div className="mb-3 mt-3">
    <label  className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={username} onChange={userNameHandler}/>
    {
        userNameError
        ?
        <h3 style={{color:"red"}}>{userNameError}</h3>
        :
        null
    }
  </div>
  <div className="mb-3">
    <label  className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" value={password} onChange={passwordHandler} />
  </div>
  {
    userNameError||userNameError ? null :<button type="submit" className="btn btn-primary">Submit</button>
  }
 
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
</form>

        </>
    )
}
export default Controlled;