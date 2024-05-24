import { Button } from "bootstrap"
import { useState } from "react"
import React from "react"



// const StateUplifting =() =>{
//     const[count,setCount]=useState(0)
//     const handleCount = () =>{
//         setCount(count+1)
//     }
//     return(
//         <>
//        <h1>{count}</h1>
//        <Child  handleCount={handleCount}/>
//         </>
//     )

// }
// export default StateUplifting


// export const Child = ({handleCount}) =>{
//     return(
//         <>
//         <button onClick={handleCount}>increment</button>
//         </>
//     )

// }


// const StateUplifting=()=>{
//     const[text,setText]=useState("world ")

//     const textHandler=()=>{
//         setText("hello")

//     }
//     return(
//         <>
//        <Child textHandler={textHandler}></Child>
//         </>
//     )
// }
// export default StateUplifting();

// export const Child=(textHandler)=>{
//     return(
//         <>
//         <Button onclick={textHandler}> change text</Button>
//         </>
//     )
// }







const StateUplifting = () => {
    const [text, setText] = useState("");

    const textHandler = () => {
        setText(text+"world");
    }

    return (
        <>
          
            <Child text={text} textHandler={textHandler}></Child>
        </>
    )
}

const Child = ({ text, textHandler }) => {
    return (
        <>
            <p>{text}</p>
            <button onClick={textHandler}>Change text</button>
        </>
    )
}

export default StateUplifting;

