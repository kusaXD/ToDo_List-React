import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";
function TaskForm({ create }) {
  const [task, setTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (task !== "") {
      const newTask = {
        id: Date.now(),
        task,
      };
      create(newTask);
      setTask("");
    }
  }
  return (
    <form>
      <MyInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></MyInput>
      <MyButton style={{ backgroundColor: "#00b0ff" }} onClick={addTask}>
        Add
      </MyButton>
    </form>
  );
}

export default TaskForm;
