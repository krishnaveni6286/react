import ButtonComponent from "./button";

const ParentComponent=()=>{
    return(
        <>
        <h2>hello</h2>
       <ButtonComponent>login</ButtonComponent> 
{/* 
       //here login is called children prop */}
        </>
    )
}
export default ParentComponent;