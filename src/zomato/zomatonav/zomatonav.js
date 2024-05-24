import { BrowserRouter } from "react-router-dom";
import ZomatoPostLogin from "../zomatopost/zomatopostlogin";
import ZomatoPreLogin from "../zomatopre/zomatoprelogin";



const ZomatoNavigation=()=>{
    return(
      <BrowserRouter>
      {
        true
        ?
       < ZomatoPostLogin/>
        :
       < ZomatoPreLogin/>
      }
      </BrowserRouter>
    )
}
export default ZomatoNavigation;