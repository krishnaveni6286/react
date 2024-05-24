import axios from "axios"
const ProductsApi=()=>{


    const fetchData= async ()=>{
    // axios.get("https://fakestoreapi.com/products")
    // .then(response=>console.log(response))
    // .catch(err=>console.log(err))


    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json)
    .then(response=>console.log(response))

    // 
// let result=await axios.get("https://fakestoreapi.com/products")
    // console.log(result)

    let response1=await fetch("https://fakestoreapi.com/products")
    let finalResponse=await response1.json();
    console.log(finalResponse)
    
}

return(
    <>

    <button onClick={fetchData}>click to get data</button>
    </>
)
}
export default ProductsApi;

