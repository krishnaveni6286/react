import React, { useState } from "react";

// const UseState=()=>{
//     const[count,setCount]=useState(0)

//    const handleIncrement=()=>{
//         setCount(count+1)
//     }
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={handleIncrement}>increment</button>
//         </>
//     )

// }

// to update the value
// const UseState=()=>{
//     const[data,setData]=useState({
//         name:"hello",
//         age:29
//     })
//       const UpdateFunction=()=>{
//         setData({...data,name:"hello123"})
//       }

//     return(
//         <>
//         <h1>{data.name}</h1>
//         <button onClick={UpdateFunction}> update value</button>
//         </>
//     )
// }


// const UseState=()=>{
// const [fruits,setFruits]=useState(["apple","banana","grapes","kiwi"])

// const handleAdd=()=>{
//  let newState=[...fruits,"new fruit"]
//  setFruits(newState)
// }

// const handleDelete = (index) => {
//  let result = fruits.filter((fruit, i) => {
//      return i !== index;
//  });
//  // console.log(result);
//  setFruits(result)
// }

// return(
//  <>
//  <h2>Todo list</h2>
//  <button onClick={handleAdd}>Add fruit</button>
//  <ol>
//  {
//      fruits.map((val,index)=>
//      <><li>{val}</li>
//      <button onClick={()=>handleDelete(index)}>delete fruit</button>
//      </>
//      )
//  }
//  </ol>
//  </>
// )
// }

// const UseState=()=>{
//         const[data,setData]=useState({
//             name:"hello",
//             age:29
//         })
//           const UpdateFunction=()=>{
//             setData({ ...data, city: 'New York' });
//           }
    
//         return(
//             <>
//             <h1>{data.name}</h1>
//             {data.city && <p>City: {data.city}</p>}
//             <button onClick={UpdateFunction}> update value</button>
//             </>
//         )
//     }



// const UseState = () => {
//     const [data, setData] = useState([1,2,7,94,8]);

//     const addContent = () => {
//         // Add a new property 'city' to the 'data' object
//         setData([ ...data, 9 ]);
//     }

//     return (
//         <>
//             {
//                 data.map((val)=>{
//                     <>
//                     <h1>{val}</h1>
//                     </>
//                 })
//             }
//             <button onClick={addContent}>Addnumber</button>
//         </>
//     )
// }

// export default UseState;

    


const UseState = () => {
    // const [data, setData] = useState([1, 2, 7, 94, 8]);
    const [data, setData] = useState(["a", "b", "c", "d", "d"]);
    

    const addContent = () => {
        // Add a new number to the 'data' array
        // setData([...data, 9]);
        setData([...data,"k"])
    }

    return (
        <>
            {
                data.map((val) => (
                    <li >{val}</li>
                ))
            }
            {/* <button onClick={addContent}>Add Number</button> */}
            <button onClick={addContent}>Add char</button>
        </>
    )
}

export default UseState;

