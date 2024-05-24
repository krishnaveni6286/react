import { useRef } from "react"


const Uncontrolled=()=>{

  
  const emailRef=useRef()
  const passwordRef=useRef()
  const[error,setError]=useRef(false)

  const handleSubmit=(event)=>{
    event.preventDefault()

    console.log(emailRef.current.value)
    console.log(passwordRef.current.value)
    if(passwordRef.current.value.length<3){
      alert("please enter more than 3 characters")
    }else{
      const userInfo={
        username:emailRef.current.value,
        password:passwordRef.current.value
      }
        hitServer(userInfo)

    }
    // alert("clicked")

  }

  const hitServer=(data)=>{
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>{
  if(res.message){
    alert(res.message)
    setError(res.message)
  }else{
    alert("successful login")
  }
})
.catch(err=>console.log(err))
  }
    return(
        <>
            <form action="/action_page.php" onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label  className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" ref={emailRef}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" ref={passwordRef}/>
  </div>
  {/* <div className="form-check mb-3">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label> 
  </div> */}
  {
    error?
    <h2 >{error}</h2>
    :
    null
  }
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </>
    )
}
export default Uncontrolled;