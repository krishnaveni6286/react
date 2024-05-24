
import ChildComponent from "./Child";


const ParentComponent=()=>{

    
       const details=[{
        name:"abc",
        id:101,
        salary:"10k"
       },
       {
        name:"ram",
        id:102,
        salary:"100k"
       },
       {
        name:"arjun",
        id:103,
        salary:"50k"
       }
    ]

    
    return(
        <>
          {details.map((details)=>< ChildComponent profile={details} />)}  
        </>
    )
}
export default ParentComponent;