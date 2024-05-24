

const ButtonComponent=(props)=>{
    const obj={
        text:"login"
    }
    return(
        <>
      <button>{props.children}</button>
        </>
    )
}
export default ButtonComponent;