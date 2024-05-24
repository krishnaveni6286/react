import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../compoenets/loaders/loader";


const ProductDetail=()=>{

    const routeInformation=useParams()
    console.log(routeInformation,"routeInformation")
    const[product,setProduct]=useState({})

    useEffect(()=>{
        //fetch the data related to the product
        fetchData()

    },[routeInformation.id])
    const fetchData=()=>{
        axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
        .then(response=>{
            if(response.status===200){
                setProduct(response.data)
            }
        })
    }
    return(
        <>
        <h3> product screen</h3>
        {
            Object.keys(product).length>0
            ?
            <>
           <h1>{product.title}</h1>
           <img src={product.image}  style={{height:100,width:100}}/>
           <h4 style={{color:"blue"}}>{product.price}</h4>
           <h6>{product.description}</h6>
           </> 
            :
            <Loader/>
        }
        </>
    )
}
export default ProductDetail;