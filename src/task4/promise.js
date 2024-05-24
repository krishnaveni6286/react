

// function PromiseApi1(){

import axios from "axios";

//   const promise1 = async () => {
//     let a= await ("hello world")
//     console.log(a)
//   }

//   return(
//       <>
//           <button onClick={promise1}>Click to get data</button>
          
//       </>
//   )
// }
// export default PromiseApi1;


function PromiseApi1(){

  const promise1 =  () => {
     fetch ("https://dummyjson.com/products")
    .then(response=>response.json)
    .then(response=>console.log(response))
  }
 

  return(
      <>
          <button onClick={promise1}>Click for data</button>
         
      </>
  )
}
export default PromiseApi1;



