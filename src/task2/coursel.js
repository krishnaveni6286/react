import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class  CarouselComp extends Component{
   constructor(){
    super()
    this.state={
        image:[]
    }
   }

   imageHandler=()=>{
    this.setState({
      image:[...this.state.image,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-0rqypPbHjWLR5lT3v6l78L8sKy0V_xLyQ&usqp=CAU"]
    },()=>{
      console.log("image")
    })
   }


    render(){
        return(
            <Carousel data-bs-theme="dark"  onSelect={this.imageHandler} >
               
              {this.state.image.map((val)=>(
               
                <Carousel.Item>

              <img
                className="d-block w-100"
                src={val}
                alt="First slide"
              />
              
               </Carousel.Item>
               
            ))}
             
         </Carousel>

        )

    }
}
export default CarouselComp;




