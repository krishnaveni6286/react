
import { Component } from "react";

class ClassBased extends Component{
         constructor(){
            super()
            this.state={
                text:"hello user",
                salary:10000
            }
         }

         handleIncrement=()=>{
            this.setState(
                {
                    salary:this.state.salary+1000

                },()=>{console.log(this.state.salary)}
            )

         }

    render(){
        return(
            <>
            <h3>hello world {this.props.name} {this.props.salary}</h3>
            <h2>{this.state.text}</h2>
           
            <h3>{this.state.salary}</h3>
            <button onClick={this.handleIncrement}>update salary by 1000</button>
            </>
        )
    }
}
export default ClassBased;