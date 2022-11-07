import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";
import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);

  function getNextFact() {
    fetch("https://catfact.ninja/fact")
      .then((resp) => resp.json())
      .then((resp) => {
        let copy = [...facts];
        if (copy.length == 10) {
          copy.pop();
        }
        copy.unshift(resp["fact"]);
        setFacts(copy);
        console.log(copy);
      });
  }

  return (
    <div>
      <ul>
        {facts.map((fact) => {
          return <li>{fact}</li>;
        })}
      </ul>
      {/* <Display fact={facts} /> */}
      <Button onClick={getNextFact} />
    </div>
  );
}

export default App;
