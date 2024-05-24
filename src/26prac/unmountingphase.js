import { Component } from "react";



class UnMountingPhase extends Component{
    state={
        isChildVisible:false,
    }

    ChildHandler=()=>{
        this.setState({
            isChildVisible:!this.state.isChildVisible
        })
    }
    render(){
        return(
            <>
       <h2>unmounting component</h2>
       <button onClick={this.ChildHandler}>child handler</button>

       {
        this.state.isChildVisible
        ?
        <Child/>
        :
        <h3>no child found</h3>
       }

            </>
        )
    }
}
export default UnMountingPhase;
class Child extends Component{
    componentWillUnmount(){
        alert("i am removed from dom")
    }
    render(){
        return(
            <>
            <h2>child visible</h2>
            </>
        )
    }
}