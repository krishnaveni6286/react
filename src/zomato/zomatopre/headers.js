

import { Link } from "react-router-dom";


const PreHeader=()=>{

    const LinkStyle={textDecoration:"none",margin:20,color:"white"}
  
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link style={LinkStyle} to={"/"} ></Link>
      </li>
      <li className="nav-item">
        <Link style={LinkStyle} to={"/Add-Restaurant"} >Add-Restaurent</Link>
      </li>
      <li className="nav-item">
        <Link style={LinkStyle} to={"/Login"}>Login</Link>
      </li>
      <li className="nav-item">
       <Link style={LinkStyle} to={"/Sign-up"}>Sign-Up</Link>
      </li>
     
     
    </ul>
  </div>
</nav>

    )
}
export default PreHeader;