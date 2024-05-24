
import React from "react";
import LoginScreen from "../compoenets/screens/preloginscrenn/loginscren";
import { Route,Routes } from "react-router-dom";

function PreLogin(){
    return(
        <Routes>
        {/* //we have add the ruotes  available in our application */}

        <Route path="/" Component={LoginScreen} />
       

    </Routes>
    )
}
export default PreLogin;