import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/app.css";
function App() {
  const [tasks, setTasks] = useState([{ id: 1, task: "" }]);

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function removeTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>TO-DO List</h1>
      <TaskForm create={createTask} />
      {tasks.length > 1 ? (
        <TaskList tasks={tasks} remove={removeTask} />
      ) : (
        <h1>no tasks((</h1>
      )}
    </div>
  );
}

export default App;
