import { useMemo, useState } from "react";


const UseMemoExample=()=>{
    const[count1,SetCount1]=useState(0)
    const[count2,SetCount2]=useState(0)

    const handleCounter1=()=>{
        SetCount1(count1+1)
    }

    const handleCounter2=()=>{
        SetCount2(count2+1)
    }
    const evenChecker= useMemo(()=>{
        console.log("even checker call")
        return count1%2===0 ?"EVEN" :"ODD"
    },[count1])
    return(
        <>
        <h1>{count1}</h1>
        <h1>{count2}</h1>
        <h3>{evenChecker}</h3>
        <button onClick={handleCounter1}>click 1</button>
        <button onClick={handleCounter2}>click 2</button>
        </>
    )

}
 export default UseMemoExample;