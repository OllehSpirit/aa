import { useReducer } from "react";

export default function UseReducerHook() {
  function reducer(count, action) {
    if (action.type === 'increment') {
      return ++count
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => { dispatch({ type: 'increment' }) }}>+</button>
    </div>
  );
}