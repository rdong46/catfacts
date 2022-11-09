import React from "react";
import "./Display.css";

function Display(props) {
  return (
    <div className={props.favorite} id="box">
      <h3>Current Fact</h3>
      <div>{props.fact}</div>
    </div>
  );
}

export default Display;
