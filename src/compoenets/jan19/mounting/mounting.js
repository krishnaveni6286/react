import { Component } from "react";
import Loader from "../../loaders/loader";



class Mounting extends Component{
    constructor(){
        super()
        this.state={
            message:"good morning",
            color:"red",
            posts:[]
        }
    }
    static getDerivedStateFormProps(props){
        console.log("getDerivedStateFromProps")
        return{color:props.color}
    }

    componentDidMount(){
        //dom nipulation
        // document.title="Filpcart"

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response=>response.json())
        .then(response=>{
           
            this.setState(
                {
                    posts:response
                }
            )
        })
    }

    render(){
        console.log("render",this.state.posts)
        return(
            <>
            <h3 style={{color:this.state.color}}>Mounting {this.state.message}</h3>

            {
                this.state.posts.length>0
                ?
                <>
                {
                    this.state.posts.map((eachPost)=><>
                       
                            <h2>{eachPost.title}</h2>
                            <h2>{eachPost.id}</h2>
                    </>
                    )
                }
                </>
                :
                <Loader/>
            }
            </>
        )

    }
}
export default Mounting;