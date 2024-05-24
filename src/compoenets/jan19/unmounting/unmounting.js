import { Component } from "react";


class UnMounting extends Component{
    constructor(){
        super()
        this.state={
            isVisible:false
        }

    }

    handleVisible=()=>{
        this.setState({
            isVisible:!this.state.isVisible
        })

    }
    render(){
        
        return(
            <>
            <h2>unmounting</h2>
            <button onClick={this.handleVisible}>Click to alter flag</button>

            {
                this.state.isVisible?
               <Child/>
                :
                <h1>i am hidden</h1>
            }
            </>
        )
    }

}
export default UnMounting;


class Child extends Component{

    componentWillUnmount(){
        alert("i am removed from dom")
    }
    render(){
        return(
            <>
            <h2>i am hidden</h2>
            <h2>i am visible</h2>
            </>
        )
    }
}