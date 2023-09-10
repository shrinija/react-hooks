'use client'

import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const MyUseReducerbetter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div className="h-32">
      <h1 className="bg-yellow-100 p-2 w-10 m-1">{state.count}</h1>
      <button className="btn-s m-2"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default MyUseReducerbetter;