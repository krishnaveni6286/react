import { useState } from "react";


const ControlledForm =()=>{
       const [username,setUsername]=useState("")
       const [password,setPassword]=useState("")
       const[usernameErr,setUserNameErr]=useState(null)

       const usernameHandler=(event)=>{
        let input=event.target.value           //field validations
         setUsername(input)
          // if(input.length>5){
        
          //   showError()

          // }else{
          //   setUserNameErr(null)
          // }
       }
      //  const showError=()=>{
      //   setUserNameErr("user name must be lss than error 5 char")

      //  }

       const passwordHandler=(event)=>{
        setPassword(event.target.value)

       }

       const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(username,password)
        // username: 'kminchelle',
        // password: '0lelplR',
        postData(
          {
            username,
            password
          }
        )

        
       }

       const postData=(data)=>{
        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>console.log(res));
            
       }
    return(
       
        <>
        <h1>Controlled form</h1>

        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label >Email address:</label>
    <input type="text" className="form-control" id="email" value={username} onChange={usernameHandler} style={{border: usernameErr &&"2px solid red"}} />
    {
      usernameErr
      &&
      <span style={{color:"red"}}>{usernameErr}</span>
     
    }
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="password" className="form-control" id="pwd" value={password} onChange={passwordHandler}/>
  </div>
 
  <button type="submit" className="btn btn-default">Submit</button>
</form>
        </>
    )
}
export default ControlledForm;