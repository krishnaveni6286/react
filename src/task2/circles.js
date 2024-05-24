import { Component } from "react";
import "./circle.css"



class Circles123 extends Component{
       constructor(){
        super ()
        this.state=
        {
            circle:[],
            count:0
        }

        
       }

       CircleHandler=()=>{
        this.setState(
           {
           circle:[...this.state.circle,false],
              count:this.state.count+1
            },()=>{
                console.log("circle")
                console.log("count")

            }
        )
       }


    render()
    {
        return(
            <>
             <button onClick={this.CircleHandler}>click to add circles</button>
             <h2>{this.state.count}</h2>

           {this.state.circle.map((val)=>
            <div style={{width:100 ,height:100, borderRadius:"50%",backgroundColor:"yellow",textAlign:"center"}} >{this.state.circle}</div>

            )}
           
       
            
            </>

          
        )
    }
}
export default Circles123;