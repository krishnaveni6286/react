import { Component } from "react";






class ThemeComponents extends Component{
    state={
           color:"red",
           message:false,
           color1:"blue"
    }
    handlecolor=()=>{
        this.setState(
            {
        
                message:!this.state.message
      
              },()=>{ 
                  console.log(this.state.message)
              })

        
    }
    render(){
        return(
            <>
            
           <button onClick={this.handlecolor}>{this.state.message?<div style={{backgroundColor:"yellowgreen",color:"red",width:200,height:200}}></div>:<div style={{backgroundColor:"blue",width:200,height:200}}></div>}</button>
            {
                this.state.message
                ?
                <h2>theme is changed</h2>
                :
                <h2>theme is not changed</h2>
            }
            
            </>
        )
    }
}
export default ThemeComponents