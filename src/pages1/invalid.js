import { useNavigate } from "react-router-dom";


const InvalidComponent=()=>{

    const navigate=useNavigate()
    const handleRoute=()=>{
        navigate("/")
    }
    return(
      <>
        <h2>Invalid Screen</h2>
        <button onClick={handleRoute}>back to home</button>
        </>
        
    )
}
export default InvalidComponent;