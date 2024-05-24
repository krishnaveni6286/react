// import { Component } from "react";
// import  "./table.css"


// class TableClass extends Component{
//     constructor(){
//         super();
//         this.state={
//             products:[
//                 {id:101, name:"Arjun",disgnation:"react"},
//                 {id:102, name:"Ramu",disgnation:"JavaScript"},
//                 {id:103, name:"Hari",disgnation:"Angular"},
//                 {id:104, name:"sai",disgnation:"react"},
//                 {id:105, name:"Bheem",disgnation:"Angular"},
//                 {id:106, name:"Nobitha",disgnation:"JavaScript"}
//         ]

//     }
//     }

    
// render(){
//     return(
//         <>
//         <table>
//     <tr>
//         <th>id</th>
//         <th>name</th>
//         <th>disgnation</th>
//     </tr>
    
//       {this.state.products.map((eachobjcet)=>{
//         <tr>
       
//         <td>{eachobjcet.id}</td>
//         <td>{eachobjcet.name}</td>
//         <td>{eachobjcet.disgnation}</td>
        
//         </tr>
   
//        })}


// </>

    
// </table>



       

//         </>
//     )
// }
// }
//  export default TableClass;  







import React, { Component } from "react";
import "./table.css";


class TableClass extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 101, name: "Arjun", disgnation: "react" },
        { id: 102, name: "Ramu", disgnation: "JavaScript" },
        { id: 103, name: "Hari", disgnation: "Angular" },
        { id: 104, name: "sai", disgnation: "react" },
        { id: 105, name: "Bheem", disgnation: "Angular" },
        { id: 106, name: "Nobitha", disgnation: "JavaScript" },
      ],
    };
  }


  reactHandler = () => {
    this.setState({
        products: this.state.products.filter((eachobjcet) => {
            return eachobjcet.disgnation === "react" || "Angular" || "JavaScript";
        })
    });
}


AngularHandler = () => {
    this.setState({
        products: this.state.products.filter((eachobjcet) => {
            return eachobjcet.disgnation === "Angular";
        })
    },);
}

JsHandler = () => {
    this.setState({
        products: this.state.products.filter((eachobjcet) => {
            return eachobjcet.disgnation === "JavaScript";
        })
    });
}



  render() {
    return (
<>
        <table>
         
            <tr>
              <th>id</th>
              <th>name</th>
              <th>disgnation</th>
            </tr>
          
          
            {this.state.products.map((eachobjcet) => (
              <tr key={eachobjcet.id}>
                <td>{eachobjcet.id}</td>
                <td>{eachobjcet.name}</td>
                <td>{eachobjcet.disgnation}</td>
              </tr>
            ))}
         
        </table>
        <button onClick={this.reactHandler}> react</button>
        <button onClick={this.JsHandler}> js</button>
        <button onClick={this.AngularHandler}> Angular</button>
      </>

      
    );
  }
}

export default TableClass;
