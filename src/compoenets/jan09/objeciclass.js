import { Component } from "react";



class ClassObject extends Component{
    state={
        message:"subscribe"
    }
    render(){
        return(
          <button>{this.state.message}</button>
          
        )
    }
}
export default ClassObject