import axios from "axios";
import { Component } from "react";
import { Watch } from "react-loader-spinner";




class Mounting extends Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                this.setState({
                    products:response.data
                })
            }
            else{
                alert("something is wrong")
            }
    })

    .catch(err=>console.log(err))

}
render(){
   
    console.log(this.state.products,"render methods");
    return(
        <>
        <h1>product list</h1>
        {
     
            this.state.products.length > 0 ?
            this.state.products.map(eachobject=><h2 key={eachobject.id}>{eachobject.title}{eachobject.price} </h2>
            ):
           <div >
            <Watch/>
            </div>
        }
      
        </>
    )
}
}
export default Mounting;