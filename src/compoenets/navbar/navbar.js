
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataShare } from "../../navjan29/navigation";

const NavBar=()=>{

const sharedContext=useContext(DataShare)
console.log(sharedContext)
const {name}=sharedContext
  
  const link={
        textDecoration:"none",color:"blue"
    }
    const listStyle={
        margin:7
    }
    return(
        <>


<nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav" style={listStyle}>
      <li className="nav-item" ></li>
       <li>
        <Link to="/" style={link}>{name}</Link>
      </li>
     <li className="nav-item" style={listStyle}>
        <Link to="/Products" style={link}>ProductScreen  </Link>
        
      </li>
      <li className="nav-item" style={listStyle}>
      <Link to="/About" style={link}>AboutScreen  </Link>
      </li>
      <li className="nav-item" style={listStyle}>
      <Link to="/Settings" style={link}>SettingScreen</Link>
       
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}
export default NavBar;