import { Link } from "react-router-dom";
import PostHeader from "./headers";
import { Card } from "react-bootstrap";


const Setting=()=>{
    return(
        <>
        <PostHeader/>
        <h2>NightLife</h2>
        <div style={{display:"flex"}}>
        <div>
         <Link to={"https://www.zomato.com/hyderabad/newly-opened"}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLvkyO5f4-4vbNqdMKGtwLTe4sX5NzGuLLQ&usqp=CAU"alt="newly-opened"  style={{height:350,width:300,margin:20}}/>
        </Link>
        <p>New In Town</p>
         </div>
       
         <div>
         <Link to={"https://www.zomato.com/hyderabad/live-sports-screenings"}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLvkyO5f4-4vbNqdMKGtwLTe4sX5NzGuLLQ&usqp=CAU"alt="live-sports-screenings"  style={{height:350,width:300,margin:20}}/>
        </Link>
        <p>New In Town</p>
         </div>

         <div>
         <Link to={"https://www.zomato.com/hyderabad/must-visit-restaurants"}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLvkyO5f4-4vbNqdMKGtwLTe4sX5NzGuLLQ&usqp=CAU"alt="must-visit-restaurants"  style={{height:350,width:300,margin:20}}/>
        </Link>
        <p>New In Town</p>
         </div>

         <div>
         <Link to={"https://www.zomato.com/hyderabad/taste-of-andhra"}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLvkyO5f4-4vbNqdMKGtwLTe4sX5NzGuLLQ&usqp=CAU"alt="taste-of-andhra"  style={{height:350,width:300,margin:20}}/>
        </Link>
        <p>New In Town</p>
         </div>

         <div>
         <Link to={"https://www.zomato.com/hyderabad/legendary-places"}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLvkyO5f4-4vbNqdMKGtwLTe4sX5NzGuLLQ&usqp=CAU"alt="legendary-places"  style={{height:350,width:300,margin:20}}/>
        </Link>
        <p>New In Town</p>
         </div>

         <div>
         <Link to={"https://www.zomato.com/hyderabad/mandi-house"}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcLvkyO5f4-4vbNqdMKGtwLTe4sX5NzGuLLQ&usqp=CAU"alt="mandi-house"  style={{height:350,width:300,margin:20}}/>
        </Link>
        <p>New In Town</p>
         </div>

         </div>



        </>
    )
}
export default Setting;