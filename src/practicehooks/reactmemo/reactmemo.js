import { useState } from "react";

const ReactMemo=()=>{
    const[count,SetCount]=useState(0)

    const UpdateCount=()=>{
        SetCount(count+1)
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={UpdateCount}></button>
        </>
    )
}
export default React.memo(ReactMemo);