import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";
import { useEffect, useState } from "react";

function App() {
  const [facts, setFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFact, setCurrentFact] = useState("");
  const [currentFavorite, setCurrentFavorite] = useState("");

  useEffect(() => {
    if (facts.length > 0) {
      setCurrentFact(facts[currentIndex]["fact"]);
      if (facts[currentIndex]["favorite"]) {
        setCurrentFavorite("favorite");
      } else {
        setCurrentFavorite("not-favorite");
      }
    }
  }, [currentIndex, facts, currentFavorite]);

  function getNextFact() {
    fetch("https://catfact.ninja/fact")
      .then((resp) => resp.json())
      .then((resp) => {
        let copy = [...facts];
        if (copy.length == 11) {
          copy.pop();
        }
        let cur = {
          fact: resp["fact"],
          favorite: false,
        };
        copy.unshift(cur);
        setFacts(copy);
        setCurrentIndex(0);
      });
  }

  function checkFavorite() {
    if (facts.length > 0) {
      if (!facts[currentIndex]["favorite"]) {
        let copy = [...facts];
        copy[currentIndex]["favorite"] = true;
        setFacts(copy);
      }
    }
  }

  function undoFavorite() {
    if (facts.length > 0) {
      if (facts[currentIndex]["favorite"]) {
        let copy = [...facts];
        copy[currentIndex]["favorite"] = false;
        setFacts(copy);
      }
    }
  }

  function handleClick(key) {
    setCurrentIndex(key);
  }

  return (
    <div className="center">
      <h2>Cat Facts</h2>
      <Display
        fact={currentFact}
        favorite={currentFavorite}
        checkFavorite={checkFavorite}
        undoFavorite={undoFavorite}
      />
      <div className="history">
        {facts.map((fact, index) => {
          return (
            <button
              className={facts[index]["favorite"] ? "pink" : "none"}
              key={index}
              onClick={() => handleClick(index)}
            >
              {index === 0 ? "Current Fact" : index}
            </button>
          );
        })}
      </div>

      <Button onClick={getNextFact} />
    </div>
  );
}

export default App;
