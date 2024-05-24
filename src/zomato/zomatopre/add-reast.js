import CardExample from "../additionalfiles/card";
import PreHeader from "./headers";


const ZomatoAddReast=()=>{
    return(
        <>
        {/* <PreHeader/> */}
        
         <img src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp"  style={{width:"100%"}}/> 

        <img src="https://b.zmtcdn.com/web/merchant/advertize/3d432595dac7d2bda0b4cc41f6afe6ef1564646824.png"  style={{position:"absolute" ,top:20,left:150,height:40,widows:30}}/>
        <p style={{position:"absolute", top:100,left:200,color:"white",fontSize:40 }}>Partner with Zomato</p>
        <p style={{position:"absolute", top:150,left:200,color:"white",fontSize:40 }}>at 0% commission for the 1st month!</p>
        <p style={{position:"absolute", top:220,left:200, color:"white"}}>And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
        {/* <img src="https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp" style={{position:"absolute"}}/> */}
        <form> 
           
            <input type="text"  placeholder="Register your restaurant"  style={{position:"absolute", top:280,left:200,height:45,width:320,borderRadius:10,border:"none",backgroundColor:"lightblue"}}/>

           
            <input type="text" placeholder="Login to view your Restaurant "  style={{position:"absolute", top:280,left:530,height:45,width:320,borderRadius:10,border:"none"}}/>
        </form>
        <p style={{position:"absolute", top:330,left:200,color:"white"}}>Need help? Contact +91 97-38-38-38-38</p>
        <CardExample/>

       <h1  style={{position:"absolute",left:250,top:800}}>Why should you partner with Zomato?</h1>
       <p style={{position:"absolute",left:200,top:850,fontSize:20}}>Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
        </>
    )
}
export default ZomatoAddReast;