import { Component } from "react";



class DomManipulation extends Component{
    state={
        counter:0,
        favouriteColor:"red"
    }

    IncrementHandler=(val)=>{
       this.setState({
        counter:this.state.counter+val
       })
    }
    componentDidMount(){     //changing title
        document.title=this.state.counter
    }
    componentDidUpdate(){
        document.title=this.state.counter
    }
    static getDerivedStateFromProps(props,state){
        return{favouriteColor:props,favColor}
        // to initialize state based on props
        //  return(favouriteColor:Props.favColor);
    }
    render(){
        return(
            <>
             <h2>Dom Manipulation</h2>
           
          
           <h3>{this.state.counter}</h3>
           <button onClick={()=>this.IncrementHandler(10)}> counter</button>
           <h2>{this.state.favColor}</h2>

            </>
        )
    }
}
export default DomManipulation;