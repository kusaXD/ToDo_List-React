import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, remove }) {
  return (
    <div className="list">
      {tasks.map((task) => (
        <TaskItem remove={remove} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
