import { Component } from "react";
import { Watch } from "react-loader-spinner"


class Watch extends Component{

render(){
return(
<div  style={{backgroundColor:"blue"}}> 
     <Watch 
    visible={true}
    height="80"
    width="80"
    radius="48"
    color="blue"
    ariaLabel="watch-loading"
    wrapperStyle={{backgroundColor:"blue",color:"red"}}
    wrapperClass=""
    position="absolute"
    top="300px"
    left="300px"
    
     /> 
    </div>)

}
}
export default Watch;