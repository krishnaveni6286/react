import { useState } from "react"


const useCounter=(initialState)=>{
const [count,setCount]=useState(0)
const handelCount=(value)=>{
    setCount(count+value)
}
return [count,handelCount]

}
export default useCounter