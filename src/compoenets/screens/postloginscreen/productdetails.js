import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ProductDetails=()=>{
    const routeInformation=useParams()

    const [productDetails,setProductDetails]=useState({})

    useEffect(()=>{
        fetchEachProduct(routeInformation.id)
    },[routeInformation.id])

    const fetchEachProduct=(id)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            if(response.status===200){
                setProductDetails(response.data)
            }else{
                alert("req failed")
            }
        })
    }
    return(
       <>
       {
        Object.keys(productDetails).length>0
        ?
        <>
        <img src={productDetails.image} alt={productDetails.category} width={100} height={100}/>
        <h2>{productDetails.category}</h2>
        <h2>{productDetails.price}</h2>
        </>
        :
        <h2>Loading...</h2>
       }
       </>
    )
}
export default ProductDetails;