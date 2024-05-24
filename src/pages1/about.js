import { useContext } from "react";
import ComponentA from "../contexapi/componenta";
import Header from "../navbar/header";
import { userDetails } from "../navigation/navigation1";
import useAxios from "../customhooks/useaxios";
import { Spinner } from "react-bootstrap";
import { BASE_PROD_URL,endPoints } from "../endpoints/endpoints";


const AboutComponent=()=>{
   let globalInfo=useContext(userDetails)

   // const [data] = useAxios("https://fakestoreapi.com/products/categories")
   const [data]=useAxios(`${BASE_PROD_URL}${endPoints.categories}`)
   console.log(data)
   console.log(globalInfo)
   
   const changeName=()=>{
    globalInfo.changeName()

   }
    return(
     <>
     <Header/>
        <h2>About screen</h2>
        <h2>i am from navigation{globalInfo.username}</h2>
        <button onClick={changeName}> change name</button>
        <ComponentA/>

        {
           data.length>0
           ?
           data.map(ele=><h1>{ele}</h1>)
           :
           <Spinner/>
        }
        </>
    
    )
}
export default AboutComponent;