


// import { hover } from "@testing-library/user-event/dist/hover";
// import { Component } from "react";




// class CircleStyle extends Component{

//      constructor(){
//         super ()
//         this.state=
//         {
//             circle:[],
//             count:0,
//             color:"white"
//         }

        
//        }

//        CircleHandler=()=>{
//         this.setState(
//            {
//            circle:[...this.state.circle,  false ],
//               count:this.state.count+1
//             },()=>{
//                 console.log("circle")
//                 console.log("count")

//             }
//         )
//        }
//        colorHandler=(index)=>{
//         this.setState({
//             circle:this.state.circle === 'white' ? 'black' : 'white',
//         })
//        }
       


//     render()
//     {
//         return(
//             <>
//              <button onClick={this.CircleHandler}>click to add circles</button>

             
            
//              <h2>{this.state.count}</h2>

//            {this.state.circle.map((val,ind)=>
//             <div style={{width:100 ,height:100, borderRadius:"50%",border:"2px solid black",textAlign:"center", backgroundColor:this.state.color
//          }} >{this.state.circle}</div>

//             )}

//             <button onClick={()=>this.colorHandler(white)}>color</button>
           
           
       
            
//             </>

          
//         )
//     }
// }
// export default CircleStyle;