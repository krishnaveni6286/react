



// class ChildComponent extends Component{
//     render(){
//         return(

//         )
//     }
// }

const ChildComponent=({handleIncrementMethod})=>{
    return(
        <button onClick={()=>handleIncrementMethod(2)}>Increment by 1</button>
    )
}
export default ChildComponent;
