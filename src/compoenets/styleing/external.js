import { Component } from "react";
import "./style.css"



class ExternalComponent extends Component{

    render(){
        return(
            <>
            <h1 className={"greeting"}>hello world</h1>
            </>
        )
    }
}
export default ExternalComponent