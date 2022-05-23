import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Counter from "./components/Counter/Counter";
import TaskApp from "./components/TaskApp";
import Tasks from "./components/Task/Task"
import TaskHeader from "./components/TaskHeader/TaskHeader";
import Task from "./components/Task/Task";

function App() {
  return <div>
    <AddTask/>
    <Counter/>
    <AddTask/>
    <TaskApp/>
    <Tasks/>
    <TaskHeader/>
    <Task/>
  </div>;
}

export default App;
