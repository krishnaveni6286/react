import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages1/login";
import InvalidComponent from "../../pages1/invalid";


const PreRoutes=()=>{
    return(
      
        <Routes>
           <Route path="/"Component={Login}/>
           <Route path="*" Component={InvalidComponent} />
        </Routes>
       

    )
}
export default PreRoutes;