import React from "react";
import classes from "./MyInput.module.css";
function MyInput(props) {
  return (
    <input
      placeholder="what you want to do"
      type="text"
      value={props.task}
      {...props}
    ></input>
  );
}

export default MyInput;
