

import { Link } from "react-router-dom";


const PostHeader=()=>{

    const LinkStyle={textDecoration:"none",margin:20,color:"black",height:30}
   
    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link style={LinkStyle} to={"/"} ><img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" style={{height:30,width:30}} />Dining Out</Link>
      </li>
     
      <li className="nav-item">
       <Link style={LinkStyle} to={"/Profile"}><img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png" style={{height:30,width:30}}/>Delivery</Link>
      </li>
      <li className="nav-item">
       <Link style={LinkStyle} to={"/Setting"}><img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"  style={{height:30,width:30}}/>NightLife</Link>
      </li>
     
    </ul>
  </div>
</nav>

    )
}
export default PostHeader;