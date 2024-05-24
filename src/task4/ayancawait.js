
function AsyncANDAwait(){

    const promise2 = async () => {
      let a= await axios.get ("https://dummyjson.com/products")
      console.log(a)
    }
  
    return(
        <>
            <button onClick={promise2}>Click for data</button>
            
        </>
    )
  }
  export default AsyncANDAwait;
  

