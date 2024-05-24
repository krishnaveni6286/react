import { BrowserRouter,Route,Routes } from "react-router-dom"
import HomeComponent from "../../pages1/home"
import AboutComponent from "../../pages1/about"
import ProfileComponent from "../../pages1/profile"
import SettingComponent from "../../pages1/settings"
import InvalidComponent from "../../pages1/invalid"
import ProductDetail from "../../pages1/product-detail"




const PostRoutes=()=>{
    return(

        
      
       <Routes>
        <Route path="/" Component={HomeComponent}/>
        <Route path="/about" Component={AboutComponent}/>
        <Route path="/profile" Component={ProfileComponent}/>
        <Route path="/setting" Component={SettingComponent}/>
        <Route path="/*" Component={InvalidComponent}/>

        <Route path="/:category/:id" Component={ProductDetail} />
   
   
       </Routes>
  

    )
}
export default PostRoutes