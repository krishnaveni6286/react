import { Component } from "react";



class YouTubeButton extends Component{
              constructor(){
                super()
                this.state={
                    isSubscribed:false
                }
              }
              handleSubscribe=()=>{
                this.setState(
                    {
                        isSubscribed:!this.state.isSubscribed
                    },()=>{

                    }
                )

              }


    render(){
        return(
            <>
            <button onClick={this.handleSubscribe}>{this.state.isSubscribed?"un_subscribe":"please subscribe"}</button>

            {
                this.state.isSubscribed?<h2>welcome user</h2>:null
            }
            </>
        )
    }
}
export default YouTubeButton;