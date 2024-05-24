

export const TodoList=()=>{
    const details={
    name:"Flowers",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl32FH0ypWnPMveAFhA5GKYL8uk37vz9vEQ&usqp=CAU"    ,
    imageAlt: "flower"  ,
    ListItems:   ["lily","rose","sunflower"]  
}
return(
    <div>
        <h1>{details.name}</h1>
        <img
        src={details.imageUrl}
        alt={details.imageAlt}
        />
        <ul>
            <li>{details.ListItems[0]}</li>
            <li>{details.ListItems[1]}</li>
            <li>{details.ListItems[2]}</li>
        </ul>
        <button onClick={()=>{alert("details")}}>clickme</button>
    </div>
)
}
export default TodoList