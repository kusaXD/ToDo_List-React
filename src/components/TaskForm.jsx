import React, { useReducer, useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";
function TaskForm({ create }) {
  const [task, setTask] = useState("");

  function createTask(e) {
    e.preventDefault();
    create(task);
  }

  return (
    <form>
      <MyInput
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></MyInput>
      <MyButton style={{ backgroundColor: "#00b0ff" }} onClick={createTask}>
        Add
      </MyButton>
    </form>
  );
}

export default TaskForm;
