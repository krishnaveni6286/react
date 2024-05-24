import { Component } from "react";
import ChildComponent from "./child";


class Counter extends Component{
//creating class using constructor way
constructor(){
    super()
    this.state={
       count:0
    }
}
handleIncrement=(data)=>{
    this.setState(
        {
            count:this.state.count+data
        }
    )
}

    render(){
        return(
            <>
            <h3>Counter</h3>
            <h3>{this.state.count}</h3>
            <ChildComponent handleIncrementMethod={this.handleIncrement}/>
            </>
        )
    }
}
export default Counter;