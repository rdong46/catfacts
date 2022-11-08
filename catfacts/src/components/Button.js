import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="next">
        {props.facts.length === 0 ? "First Fact!" : "Next Fact!"}
      </button>
    </div>
  );
}

export default Button;
