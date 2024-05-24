import { useState } from "react";
import { FormText } from "react-bootstrap";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwdErr, setPwdErr] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const[confirmErr,setConfirmErr]=useState("")
  const [phone, setPhone] = useState("");
  const [nameErr, setNameErr] = useState("");

  const emailHandler = (event) => {
    let inputEmail = event.target.value;
    setEmail(inputEmail);
    if (inputEmail ) {
      showNameError();
    } else {
      showNameError(null);
    }
  };
  const showNameError = () => {
    setNameErr("");
  };

  const passwordHandler = (event) => {
    let inputPassword = event.target.value;
    setPassword(inputPassword);
    if(inputPassword<=8){
        showPwdError()
    }else{
        showPwdError(null)
    }
  };
  const showPwdError=()=>{
    setPwdErr("enter atleast 8 char ")
  }
  const confirmHandler = (event) => {
    let inputConfirm = event.target.value;
    setConfirmPass(inputConfirm);
    if(setPassword==setConfirmPass){
       setConfirmedErr() 
    }else{
       setConfirmErr(null)
    }


  };

 const setConfirmedErr=()=>{
    setConfirmErr(" password not matched")

 }

  


  const phoneHandler = (event) => {
    let phoneInput = event.target.value;
    setPhone(phoneInput);
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={emailHandler}
          />
           {
      nameErr
      &&
      <span style={{color:"red"}}>{nameErr}</span>
     
    }
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            value={password}
            onChange={passwordHandler}
          />
          <span>{pwdErr}</span>
        </div>
        <div className="form-group">
          <label>ConfirmPassword:</label>
          <input
            type="password"
            className="form-control"
            id="confirmpwd"
            value={confirmPass}
            onChange={confirmHandler}
          />
          <span>{confirmErr}</span>
        </div>
        <div className="form-group">
          <label>phone No</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={phoneHandler}
          />
        </div>
        <br />

        <div>
          <label>Gender</label>
          <br />
          <br />
          <input type="radio" id="male" name="fav_language" value="Gender" /> 
          <label>Male</label>
          <br />
        </div>

        <div>
          <input type="radio" id="female" name="fav_language" value="Gender" /> {" "}
          <label>Female</label>
          <span>{}</span>
        </div>
        <br />

        <label >Choose fav color:</label>
        <select id="cars" name="cars">
          <option value="volvo"></option>
          <option value="blue">blue</option>
          <option value="purple">purple</option>
          <option value="yellow">yellow</option>
        </select>
        <br />

        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
  );
};
export default FormValidation;
