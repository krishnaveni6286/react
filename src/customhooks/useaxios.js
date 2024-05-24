import axios from "axios"
import { useEffect, useState } from "react"
import { resolvePath } from "react-router-dom"


// const useAxios=()=>{
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         axios.get("https://fakestoreapi.com/products ")
//         .then(response=>{
//             if(response.status===200){
//                 setData(response.data)
//             }
//         })
//         .catch(err=>console.log(err))
//     },[])
//     return[data]
// }
// export default useAxios;  //it is given as hard code


const useAxios=(url)=>{
        const[data,setData]=useState([])
        useEffect(()=>{
            axios.get(url )
            .then(response=>{
                if(response.status===200){
                    setData(response.data)
                }
            })
            .catch(err=>console.log(err))
        },[])
        return[data]
    }
    export default useAxios;
 
    // it is giving as dynamically