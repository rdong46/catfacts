import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>Next Fact!</button>
    </div>
  );
}

export default Button;
