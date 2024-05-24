


function ApiCall1(){
        const fetchData=()=>{
            fetch("https://fakestoreapi.com/carts?userId=1")
             .then(respone=>console.log(respone))
            .catch(err=>console.log(err))
        }
        return(
            <>
            <button onClick={fetchData}>click here to fetch data</button>
            </>
        )
}
export default ApiCall1