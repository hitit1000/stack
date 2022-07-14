import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { up, down } from "../redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <button onClick={() => dispatch(down(1))}>+</button>
      {count}
    </div>
  );
};

export default Counter;
