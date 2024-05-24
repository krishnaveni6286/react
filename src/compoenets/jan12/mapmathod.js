
import ProfileCard from "./profilecard"

const MapMethod=()=>{
    const members=[
        {
            name:"anusha",
             color:"green",
        designation:"software Engineer"
        },
        {
            name:"Navya",
             color:"green",
        designation:"software Engineer"
        },
        {
            name:"gayathri",
             color:"green",
        designation:"air hostess"
        }
    ]
    return(

        <>
         {members.map((details)=><ProfileCard profile={details}/>)}
         </>
    )
}
export default MapMethod;