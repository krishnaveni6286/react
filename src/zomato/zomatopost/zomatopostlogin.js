import { Routes ,Route} from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import Setting from "./setting";

const ZomatoPostLogin=()=>{
    return(

        <Routes>
            <Route  path="/" Component={Home}/>
            <Route  path="/Profile" Component={Profile}/>
            <Route  path="/Setting" Component={Setting}/>
        </Routes>

    )
}
export  default ZomatoPostLogin;