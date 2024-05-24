import { useReducer } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_AGE_BY_1":
      return { ...state, age: state.age + 1 };
    default:
      return state;
  }
}
const initialState = {
    age: 100,
    name: "hello"
  };

const UseReducerExample1 = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);

  const incrementAge = () => {
    dispatch({
      type: "INCREMENT_AGE_BY_1"
    });
  };

  return (
    <>
      <h2>{currentState.age}</h2>
      <button onClick={incrementAge}>incrementAge</button>
    </>
  );
};
export default UseReducerExample1;
