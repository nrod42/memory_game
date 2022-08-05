import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { characters, randomize } from "./Components/Characters";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import theme from "./audio/The_Simpsons_cut.mp3";

const App = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [guessed, setGuessed] = useState([]);
  const [isPlaying, setPlaying] = useState(false);

  const themeRef = useRef(new Audio(theme));

  const shuffle = () => {
    setShuffledCards(
      randomize().map((character) => (
        <Card
          key={character.id}
          character={character}
          handleClick={handleClick}
        />
      ))
    );
  };

  const resetGame = () => {
    setGuessed([]);
    setScore(0);
  };

  const handleClick = (id) => {
    setGuessed((prevState) => [...prevState, id]);
    if (guessed.includes(id)) {
      resetGame();
    } else {
      setScore((prevState) => prevState + 1);
    }
  };

  const toggleSound = () => {
    themeRef.current.play();
    setPlaying((prevState) => !prevState);
  };

  useEffect(() => {
    if (score > best) setBest(score);
    if (score >= characters.length) {
      resetGame();
    }
  }, [score, best]);

  useEffect(() => {
    if (isPlaying === true) {
      themeRef.current.volume = 1;
      themeRef.current.loop = true;
    } else {
      themeRef.current.volume = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    shuffle();
  }, [guessed]);

  return (
    <div className="App">
      <Header
        score={score}
        best={best}
        toggleSound={toggleSound}
        isPlaying={isPlaying}
      />
      <main>
        <div className="cardGrid">{shuffledCards}</div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
