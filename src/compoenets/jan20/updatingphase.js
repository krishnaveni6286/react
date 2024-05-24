import { Component } from "react";


class UpdatingPhase extends Component{
      constructor(){
        super()
        this.state={
            counter:0
        }
      }
      handleClick=()=>{
        this.setState({
            counter:this.state.counter+1
        })

        
      }
      getSnapshotBeforeUpdate(props,state){
        console.log(state)
        return null
      }
      shouldComponentUpdate(){
 
        return true
      }

      componentDidUpdate(){
        document.title=`count ${this.state.counter}`

      }

      componentDidMount(){
        document.title=`count ${this.state.counter}`
      }

    render(){
        return(
  
            <>
            <h3>updating phase</h3>
            <h2>{this.state.counter}</h2>
            <button onClick={this.handleClick}>Increment</button>
            </>
        )
    }
}
export default UpdatingPhase;