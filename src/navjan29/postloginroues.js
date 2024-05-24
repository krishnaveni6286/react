


import React from "react";
import HomeScreen from "../compoenets/screens/postloginscreen/homescreen";
import SettingScreen from "../compoenets/screens/postloginscreen/settingsscreen";
import AboutScreen from "../compoenets/screens/postloginscreen/aboutscreen";
import ProductScreen from "../compoenets/screens/postloginscreen/productscreen";
import InvalidScreen from "../compoenets/screens/invalidscreen";
import ProductDetails from "../compoenets/screens/postloginscreen/productdetails";
import { Route,Routes } from "react-router-dom";
function PostLogin(){
    return(
       <Routes>
         <Route path="/" Component={HomeScreen}   />
            <Route path="/settings" Component={SettingScreen}   />
            <Route path="/about" Component={AboutScreen}   />
            <Route path="/products" Component={ProductScreen}   />


            <Route path="*" Component={InvalidScreen}   />

            <Route path="/hyderabad/:id" Component={ProductDetails} />
       </Routes>
    )
}
export default PostLogin;