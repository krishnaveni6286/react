
import React from "react"

function CustomButton({children,onClick}){
    console.log(children)
    return(
        <>
        <button onClick={onClick}>{children }</button>
        </>
    )
}
export default React.memo(CustomButton)