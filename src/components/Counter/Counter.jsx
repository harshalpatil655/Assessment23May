import React from "react";
import styles from "./counter.module.css";
import {useState} from "react";

const Counter = () => {
  // sample value to be replaced
  const [count,setCount] = useState(1);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={()=>{setCount(count+1)}} data-cy="task-counter-increment-button">Increment</button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={()=>{setCount(count-1)}} data-cy="task-counter-decrement-button">Decrement</button>
    </div>
  );
};

export default Counter;
