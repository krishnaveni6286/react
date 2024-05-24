import { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case "INCREMENT_AGE_BY_10":
            return{...state,age:state.age+10}
        case "DeCREMENT_AGE_BY_10":
            return{...state,age:state.age-10}    
        case"CHANGE_THE_NAME":
            return{...state,name:"kiran"}   
          default:
                return state;
    }

}

const initialState={
       age:100,
       name:"raju",
       fruits:["apple","banana"]
}


const UseReducer=()=>{
    const [currentState,dispatch]=useReducer(reducer,initialState)

    const incrementAge=()=>{
          dispatch(
            {
                type:"INCREMENT_AGE_BY_10"
            }
          )
    }
    const decrementAge=()=>{
        dispatch({type:"DeCREMENT_AGE_BY_10"});
  }

    const changeName=()=>{
        dispatch({type:"CHANGE_THE_NAME"})
    }
    return(
        <>
        <h1>use reducer</h1>
        <h2>{currentState.age}</h2>
        <h2>{currentState.name}</h2>
        <button onClick={incrementAge}> increment</button>
        <button onClick={decrementAge}> decrement</button>
        <button onClick={changeName}>change name</button>
        </>
    )
}
export default UseReducer;