import "./index.css";
import React, { useState, useEffect } from "react";
import { characters, randomize} from "./Components/Characters"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

const App = () => {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [guessed, setGuessed] = useState([]);

  useEffect(() => {
    if (score > best) setBest(score)
    if (score >= characters.length) {
      resetGame()
    }
  }, [score, best]);

  const resetGame = () => {
    setGuessed([]);
    setScore(0);
  }

  const handleClick = (id) => {
    setGuessed((prevState) => [...prevState, id])
    if (guessed.includes(id)) {
      resetGame()
    } else {
      setScore((prevState) => prevState + 1);
    }
  };

  return (
    <div className="App">
      <Header score={score} best={best}/>
      <main>
          <div className="cardGrid">
            {randomize().map((character) => (
              <Card
                key={character.id}
                character={character}
                handleClick={handleClick}
              />
            ))}
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
