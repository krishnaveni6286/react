import ProfileKey from "./cardkp";

const KeyPropMethod=()=>{
    const members=[
        {
            name:"anusha",
             color:"green",
        designation:"software Engineer",
        id:101
        },
        {
            name:"Navya",
             color:"green",
        designation:"software Engineer",
        id:102
        },
        {
            name:"gayathri",
             color:"green",
        designation:"air hostess",
        id:103
        }
    ]
    return(

        <>
         {members.map((details)=><ProfileKey profile={details} key={details.id}/>)}
         </>
    )
}
export default KeyPropMethod;