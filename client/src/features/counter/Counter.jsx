import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment, incrementAsync, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Counter</h1>
    </div>
  );
};

export default Counter;
