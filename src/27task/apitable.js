// import axios from "axios";
// import { Component } from "react";


// class ApiTable extends Component{
//     constructor(){
//         super()
//         this.state={
            
//             products:[],
//         }
//     }
//     ApiHandler=()=>{
//         axios.get("https://fakestoreapi.com/products")
//         .then((response)=>{
//             this.setState({
//                 products:response.data
//             })

//         })
//     }
//     render(){
//         return(
//             <>
// <button onClick={this.ApiHandler}>onClick to get data</button>
// <div>
     
// <table>
//     <tbody>
       

// <tr>
//             <td>ID</td>
//             <td>Title </td>
//             <td>Description </td>
//             <td>price </td>
//             <td>count </td>
//             <td>image </td>
//         </tr>
       
// {this.state.products.map((val)=>{

// <tr key={val.id}>
// <th>{val.id} </th>
// <th>{val.title} </th>
// <th>{val.Description} </th>
// <th>{val.price} </th>
// <th>{val.count} </th>
// <th>{val.image} </th>
// </tr>
  
     
//         })}
//         </tbody>
//     </table>
   

// </div>

//             </>
//         )
//     }
// }
// export default ApiTable;

 import React, { Component } from "react";
import axios from "axios";

class ApiTable extends Component { 
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    ApiHandler = () => {
        axios.get("https://fakestoreapi.com/products")
        // fetch ("https://fakestoreapi.com/products")
        // .then(response=>response.json())
            .then((response) => {
                this.setState({
                    products: response.data
                });
            })
           
    };

    render() {
        return (
            <>
                <button onClick={this.ApiHandler}>onClick to get data</button>
                <div>
                    <table>
                       
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Image</th>
                            </tr>
                       
                       
                            {
                            this.state.products.map(val => {
                                return(
                                <tr key={val.id}>
                                    
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.description}</td>
                                    <td>{val.price}</td>
                                    <td><img src={val.image} height={100} width={100}/></td>
                                </tr>
                             ) })}
                      
                    </table>
                </div>
            </>
        );
    }
}

export default ApiTable;
