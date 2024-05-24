



const ApiCall2 =()=>{
    const fetchData =()=>{
        fetch("https://fakestoreapi.com/products?limit=5")
        .then(response=>response.json())
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    }
    return(
        <>
        <button onClick={fetchData}>click here to get data</button>
        </>
    )
}
export default ApiCall2