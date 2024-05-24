import { Route, Routes } from "react-router-dom"
import ZomatoLogin from "./login"
import ZomatoAddReast from "./add-reast"
import SignUp from "./sign-up"
import HomePre from "./homepre"



const ZomatoPreLogin=()=>{
    return(
        <Routes>
            <Route path="/" Component={HomePre}/>
            <Route  path="/Login" Component={ZomatoLogin}/>
            <Route  path="/Add-Restaurant" Component={ZomatoAddReast}/>
            <Route  path="/Sign-up" Component={SignUp}/>
        </Routes>

    )
}
export default ZomatoPreLogin