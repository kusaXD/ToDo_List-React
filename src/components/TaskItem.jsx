import React from "react";
import MyButton from "./UI/Button/MyButton";

function TaskItem(props) {
  return (
    <div className="taskItem">
      <strong className="taskItem_content">{props.task.task}</strong>
      <MyButton
        onClick={() => props.remove(props.task)}
        style={{ backgroundColor: "red" }}
      >
        delete
      </MyButton>
    </div>
  );
}

export default TaskItem;
