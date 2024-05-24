import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "../pages1/home";
import AboutComponent from "../pages1/about";
import ProfileComponent from "../pages1/profile";
import SettingComponent from "../pages1/settings";
import InvalidComponent from "../pages1/invalid";
import PostRoutes from "./perruotes/postroutes";
import PreRoutes from "./postroutes/preroutes";
import { createContext, useState } from "react";


export const userDetails=createContext()
// creating usecontext

const Navigation1=()=>{
  const [username,setUserName]=useState("water melon")
  const[login,setLogin]=useState(false)

  const changeName=()=>{
    setUserName("water")
  }
    return(
     <BrowserRouter>
     <userDetails.Provider value={{
      username,
      changeName
     }}>
      {/* // wrapping data using userdetails. provider */}
      {/* // by passing value like this we can acces it from anywhere in the wraped content */}
      
  {
   login
   ?
   <PostRoutes/>
   :
   <PreRoutes/>
  }
  </userDetails.Provider>
  </BrowserRouter>
   
       
    )
}
export default Navigation1;