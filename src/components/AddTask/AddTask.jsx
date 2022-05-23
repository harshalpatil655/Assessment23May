import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue]= useState("");
  const [todos, setTodos]= useState([]);

  return (
    <div className={styles.todoForm}>
      <input
      value={value}
      data-cy="add-task-input"
       type="text"
       onChange={(e)=>{
         setValue(e.target.value)
       }}
       />
      <button 
      onClick={()=>{
        setTodos([...todos,{id:Date.now(),value:value}])
        setValue("")
      }}
      data-cy="add-task-button"
      >Add</button>
    </div>
  );
};

export default AddTask;
