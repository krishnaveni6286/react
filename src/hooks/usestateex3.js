import { useState } from "react";


const UseStateEx3=()=>{
       const [fruits,setFruits]=useState(["apple","banana","grapes","kiwi"])

       const handleAdd=()=>{
        let newState=[...fruits,"new fruit"]
        setFruits(newState)
       }

       const handleDelete = (index) => {
        let result = fruits.filter((fruit, i) => {
            return i !== index;
        });
        // console.log(result);
        setFruits(result)
    }
    
    return(
        <>
        <h2>Todo list</h2>
        <button onClick={handleAdd}>Add fruit</button>
        <ol>
        {
            fruits.map((val,index)=>
            <><li>{val}</li>
            <button onClick={()=>handleDelete(index)}>delete fruit</button>
            </>
            )
        }
        </ol>
        </>
    )
}
export default UseStateEx3;