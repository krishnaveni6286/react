import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { json } from "react-router-dom";

// const Example1=()=>{
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         const fetchData =async () =>{
//             const res = await fetch("https://fakestoreapi.com/products")
//             const r= await res.json()
//             setData(r)
//         }
//         fetchData()
//     },[])
//     return(
//         <>
//         <h1>Products</h1>
//         {
//             data.map((val)=>(
//                 <p>{val.title}</p>
//             ))
//         }
//         </>
//     )
// }
// export default Example1;

// const Example1 = () =>{
// const[data,setData]=useState([])

// useEffect(()=>{
//     const res = fetch("https://fakestoreapi.com/products")
//     const r=res.json()
//     setData(r)
// },[])

// return(
//     <>
//     <h1>Products</h1>
//     {data.map((val)=>(
//         <h2>{val.title}</h2>
//     ))}
//     </>
// )
// }
// export default Example1;


// const Example1 = () =>{
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         fetch("https://fakestoreapi.com/products")
//         .then(res=>res.json())
//         .then((data)=>setData(data))
//     },[])
    
//     return(
//         <>
//         <h1>products</h1>
//         {data.map((val)  =>(
//             <h2>{val.title}</h2>
//         )
//         )}
//         </>
//     )
// }
// export default Example1;


// const Example1 = () =>{
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         axios("https://fakestoreapi.com/products")
//         .then(((data)=>setData(data)))
//     },[])
//     return(
//         <>
//         {data.map((val)=> (
//             <h1>{val.title}</h1>
//         ))}
//         </>
//     )
// }
// export default Example1;



// const Example1 = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios("https://fakestoreapi.com/products")
//             .then((response) => setData(response.data))
           
//     }, []);

//     return (
//         <>
//             {data.map((val) => (
//                 <h1 >{val.title}</h1>
//             ))}
//         </>
//     );
// };

// export default Example1;


const Example1 =() =>{
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async () => {
        const r = await fetch ("https://fakestoreapi.com/products");
        const res =await r.json()
        setData(res)



        


        }
    },[]) 

    return(
        <>
        <h1>Products</h1>
        {
            data.map((val)=>(
                <h1>{val.title}</h1>
            ))
        }
        </>
    )
}
export default Example1;
