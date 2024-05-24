import ProfileCard from "./profilecard";



// const BootstrapLayout=()=>{
//     return(
//         <>
//        <div className="container-fluid p-5 bg-primary text-white text-center">
//   <h1>My First Bootstrap Page</h1>
//   <p>Resize this responsive page to see the effect!</p> 
// </div>
  
// <div className="container mt-5">
//   <div className="row">
//     <div className="col-sm-4">
//      <ProfileCard name="anusha" color="green" designation="software Engineer"/>
//     </div>
//     <div className="col-sm-4">
     
//       <ProfileCard name="Navya" color="green" designation="software Engineer"/>
//     </div>
//     <div className="col-sm-4">
//     <ProfileCard name="gayathri" color="green" designation="air hostess"/>
//     </div>
//   </div>
// </div>

//       </>
//     )
// }
// export default BootstrapLayout;


const BootstrapLayout=()=>{
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
        designation:"software Engineer"
        }
    ]
    return(
        <>
       <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
     <ProfileCard  profile={members[0]}/>
     {/* //in profile place we can take anything */}


    </div>
    <div className="col-sm-4">
     
      <ProfileCard  profile={members[1]}/>
    </div>
    <div className="col-sm-4">
    <ProfileCard  profile={members[0]}/>
    </div>
  </div>
</div>

      </>
    )
}
export default BootstrapLayout;