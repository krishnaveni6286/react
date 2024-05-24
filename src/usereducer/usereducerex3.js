import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT_BY_1":
      return { ...state, count: state.count + 1 };
      default:
        return state;
  }
}

const initialState = {
  count: 0
};

const UseReducerEx3 = () => {
  const [currentState, dispatch] = useReducer(reducer,initialState);

  const countIncrement = () => {
    dispatch({
      type: "INCREMENT_COUNT_BY_1",
    });
  };

  return (
    <>
      <h2>{currentState.count}</h2>
      <button onClick={countIncrement}>increment</button>
    </>
  );
};
export default UseReducerEx3;
