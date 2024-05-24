import reactImg from "./images.png";
// img should be imported with any variable name

const ProfileCard1 =()=>{
return(
    <div class="card" style={{width:300}}>
    <img class="card-img-top" src={reactImg} alt="Card image" style={{width:"100%"}}/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div>
  </div>
)

}
export default ProfileCard1;