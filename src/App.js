import React, { useState, useReducer } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/app.css";

const initialState = [];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD":
      return [...tasks, { id: action.id, task: action.task }];
    case "REMOVE":
      return tasks.filter((t) => t.id !== action.id);
  }
}

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  function addTask(task) {
    dispatch({ type: "ADD", task: task, id: Date.now() });
  }

  function removeTask(id) {
    dispatch({ type: "REMOVE", id: id });
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>TO-DO List</h1>
      <TaskForm create={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} remove={removeTask} />
      ) : (
        <h1>no tasks((</h1>
      )}
    </div>
  );
}

export default App;
