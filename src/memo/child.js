
import React from "react"
function Child(){
    console.log("child rendering")
    return(
        <div>
            Child
        </div>
    )
}
export default React.memo(Child)