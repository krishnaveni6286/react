
const ImageComponent=()=>{
    const details={
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRga28YpBbOzEHk-CnVLCXn-cB5jsHzIPkgoQ&usqp=CAU",
        imageAlt:"dogimage"

    }
    const{imageUrl,imageAlt}=details
    return(
        <img 
      src={imageUrl}
      alt={imageAlt}/>
    )
}
export default ImageComponent