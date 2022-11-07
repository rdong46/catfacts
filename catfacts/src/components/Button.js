import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="next">
        Next Fact!
      </button>
    </div>
  );
}

export default Button;
