import { Component } from "react";
import reactImg from "./images.png";
// img should be imported with any variable name

// const ProfileCard =(props)=>{
//     console.log(props)
// return(
//     <div className="card" style={{width:300}}>
//     <img className="card-img-top" src={reactImg} alt="Card image" style={{width:"100%"}}/>
//     <div className="card-body">
//       <h4 className="card-title" style={{color:props.color}}>{props.name}</h4>
//       <p>{props.designation}</p>
//       <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
//       <a href="#" className="btn btn-primary">See Profile</a>
//     </div>
//   </div>
// )

// }
// export default ProfileCard;

// const ProfileCard =(props)=>{
//     console.log(props)
// return(
//     <div className="card" style={{width:300}}>
//     <img className="card-img-top" src={reactImg} alt="Card image" style={{width:"100%"}}/>
//     <div className="card-body">
//       <h4 className="card-title" style={{color:props.profile.color}}>{props.profile.name}</h4>
//       <p>{props.profile.designation}</p>
//       <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
//       <a href="#" className="btn btn-primary">See Profile</a>
//     </div>
//   </div>
// )

// }
// export default ProfileCard;


class ProfileCard extends Component{
    render()
   {
        return(
        
            <div className="card" style={{width:300}}>
    <img className="card-img-top" src={reactImg} alt="Card image" style={{width:"100%"}}/>
     <div className="card-body">
       <h4 className="card-title" style={{color:this.props.profile.color}}>{this.props.profile.name}</h4>
       <p>{this.props.profile.designation}</p>
       <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>     
         <a href="#" className="btn btn-primary">See Profile</a>
   </div>
   </div>
        )
    }
}
export default ProfileCard;