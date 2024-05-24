import React,  {useState} from "react";

const UseStateForm=()=>{
    const initialValue=["apple","banana"]
    const[list,setList]=useState(initialValue)

    const handleAddFruit=()=>{

        const newFruit="mango"
        setList([...list,newFruit])

    }

    return(
       <>
     <h2>Hello</h2>
     <button onClick={handleAddFruit}>Click to add new fruit</button>
     <ol>
        {
            list.map(
                (value,index)=><React.Fragment key={index}>
                <li>{value}</li>
                </React.Fragment>
            )
        }
     </ol>

       </>


    )
}
export default UseStateForm;
