
import reactImg from "./images.png"

const ProfileKey =(props)=>{
        console.log(props)
    return(
        <div className="card" style={{width:300}}>
        <img className="card-img-top" src={reactImg} alt="Card image" style={{width:"100%"}}/>
        <div className="card-body">
          <h4 className="card-title" style={{color:props.profile.color}}>{props.profile.name}</h4>
          <p>{props.profile.designation}</p>
          <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
          <a href="#" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    )
    
    }
    export default ProfileKey;