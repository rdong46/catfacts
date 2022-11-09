import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";
import History from "./components/History";
import { useState } from "react";
import background from "./images/download.jpg";

function App() {
  const [facts, setFacts] = useState([[]]);
  const [currentFact, setCurrentFact] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [viewPage, setCurrentViewPage] = useState(0);

  function getNextFact() {
    fetch("https://catfact.ninja/fact")
      .then((resp) => resp.json())
      .then((resp) => {
        if (!currentFact) {
          let cur = {
            fact: resp["fact"],
            favorite: false,
          };
          setCurrentFact(cur);
        } else {
          let copy = [...facts];
          if (copy[currentPage].length == 10) {
            copy.push([]);
            let cur = {
              fact: resp["fact"],
              favorite: false,
            };
            setCurrentPage(currentPage + 1);
            copy[currentPage + 1].push(currentFact);
            setFacts(copy);
            setCurrentFact(cur);
          } else {
            let cur = {
              fact: resp["fact"],
              favorite: false,
            };
            copy[currentPage].push(currentFact);
            setFacts(copy);
            setCurrentFact(cur);
          }
        }
      });
  }

  function handleClick(key) {
    setCurrentViewPage(key);
  }

  return (
    <div className="center" style={{ backgroundImage: `url(${background})` }}>
      <h2>Cat Facts</h2>
      <Display fact={currentFact["fact"]} />
      <History page={viewPage} facts={facts} favorite={setFacts} />
      <div className="history">
        {facts.map((fact, index) => {
          return (
            <div>
              <button key={index} onClick={() => handleClick(index)}>
                {index}
              </button>
            </div>
          );
        })}
      </div>
      <Button onClick={getNextFact} facts={facts} />
    </div>
  );
}

export default App;
