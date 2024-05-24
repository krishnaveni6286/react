import UseEffectEx1 from "../../hooks/useeffcet/useeffcet";
import UseEffectEx2 from "../../hooks/useeffcet/useeffect2";
import UseEffect3 from "../../hooks/useeffcet/useeffect3";
import NavBar from "../../navbar/navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";


const HomeScreen=()=>{


    

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

                   const newResponse= response.data.map(eachObj=>{
                        return{...eachObj,count:1,total:eachObj.price}
                    })
                    //success
                    setProductListing(newResponse)
                }
            })
        }

        const handleIncrement=(data)=>{
            console.log(data)
            console.log(productListing)

        }
   
    return(
        <>
         <NavBar/>
       
        <h2>i am from Homescreen</h2>

        {
        productListing.length>0 && productListing.map(product=><ProductListingComponent key={product.id}  data={product} handleIncrement={handleIncrement}/>)
       }
        </>
    )
}
export default HomeScreen;


export const ProductListingComponent =({data,handleIncrement})=>{
    return(
        <>
        <div>
            <h3>{data.title}</h3>
            <img src={data.image} alt={data.title} width={100} height={100}/>
            <h3>{data.price}</h3>
            <button onClick={()=>handleIncrement(data)}>Increment</button>
            <h3>{data.count}</h3>
            <button>Decrement</button>
            <Link to={`/hyderabad/${data.id}`}>
            <button>Click to view product details </button>
            
            </Link>
            
            </div>
            </>

    )
}