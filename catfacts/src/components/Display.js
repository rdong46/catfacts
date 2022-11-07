import React from "react";
import "./Display.css";

function Display(props) {
  return (
    <div className={props.favorite} id="box">
      <div>{props.fact}</div>
      <div className="button">
        <button
          onClick={props.checkFavorite}
          className={props.favorite === "not-favorite" ? "show" : "noshow"}
        >
          Favorite
        </button>
        <button
          onClick={props.undoFavorite}
          className={props.favorite === "favorite" ? "show" : "noshow"}
        >
          Un-Favorite
        </button>
      </div>
    </div>
  );
}

export default Display;
