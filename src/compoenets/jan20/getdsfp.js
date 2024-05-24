import { Component } from "react";



class GetDerivedProp extends Component{
   state={
        color:"red"
    }

    static getDerivedStateFromProps(props){
        return(
 
            {color:props.favColor}
        )
    }
    render(){
        return(

            <h2 style={{color:this.state.color}}>updating phase</h2>
        )
    }
}
export default GetDerivedProp;