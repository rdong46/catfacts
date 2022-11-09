import React from "react";
import "./History.css";

function History(props) {
  return (
    <div className="box">
      <h3>History</h3>
      <ul>
        {props.facts[props.page].map((fact, index) => {
          return (
            <li key={`${props.page}` + `${index}`}>
              <button
                onClick={() => {
                  let copy = [...props.facts];
                  copy[props.page][index]["favorite"] =
                    !copy[props.page][index]["favorite"];
                  props.favorite(copy);
                }}
                className={
                  props.facts[props.page][index]["favorite"] ? "pink" : "none"
                }
              >
                {fact["fact"]}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
