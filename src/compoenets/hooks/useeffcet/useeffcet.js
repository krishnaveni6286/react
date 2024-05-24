import axios from "axios";
import { useEffect, useState } from "react";





const UseEffectEx1=()=>{

    const [productListing,setProductListing]=useState([])
        
    

    useEffect(()=>{

        fetchData()
        console.log("component mount")
    },[])

    //this function i for fetching data from server to client 
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                //success
                setProductListing(response.data)
            }
        })
    }

    return(
        <>
       <h1>use effect example 1</h1>
       {
        productListing.length>0 && productListing.map(product=><ProductListing key={product.id}  data={product}/>)
       }
       </>
    )
    }

export default UseEffectEx1;


 export const ProductListing =({data})=>{
    return(
        <>
        <div>
            <h3>{data.title}</h3>
            </div></>
    )
}