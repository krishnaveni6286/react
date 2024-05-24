import { Link } from "react-router-dom";


const Header=()=>{

    const LinkStyle={textDecoration:"none",margin:20,color:"white"}
    const LiStyle={color:"white"}
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link style={LinkStyle} to={"/"} >Home</Link>
      </li>
      <li className="nav-item">
        <Link style={LinkStyle} to={"/about"}>About</Link>
      </li>
      <li className="nav-item">
       <Link style={LinkStyle} to={"/profile"}>Profile</Link>
      </li>
      <li className="nav-item">
       <Link style={LinkStyle} to={"/setting"}>Setting</Link>
      </li>
     
    </ul>
  </div>
</nav>

    )
}
export default Header;