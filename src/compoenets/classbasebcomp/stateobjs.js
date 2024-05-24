import { Component } from "react";
import ListComponent from "../button/jan08/list";



class Subscribe extends Component{
    state={
        message1:"subscribe",
        isSubscribed:false,
        message2:"subscribed thanks",
    }
    handleSubscribe=()=>{
          
        this.setState(
        {
        
          isSubscribed:!this.state.isSubscribed

        },()=>{ 
            console.log(this.state.isSubscribed)
        })
    }
    render(){
        return(
            <>
            <button onClick={this.handleSubscribe}>{this.state.isSubscribed?this.state.message2:this.state.message1}</button>
            
            {
                this.state.isSubscribed
                ?
                <>
                <h2>Thanks for subscribing, explore more</h2>
                <ListComponent></ListComponent>
                </>
                :
                <h2>please subscribe</h2>
            }
            </>
        )
    }
}
export default Subscribe