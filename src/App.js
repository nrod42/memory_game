import "./App.css";
import React, { useState } from "react";
import uniqid from "uniqid";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

const App = () => {
  const characters = [
    { id: uniqid(), name: "Homer", img: "/img/Homer.png" },
    { id: uniqid(), name: "Marge", img: "/img/Marge.png" },
    { id: uniqid(), name: "Bart", img: "/img/Bart.png" },
    { id: uniqid(), name: "Lisa", img: "/img/Lisa.png" },
    { id: uniqid(), name: "Maggie", img: "/img/Maggie.png" },
    { id: uniqid(), name: "Grandpa", img: "/img/Grandpa.png" },
    { id: uniqid(), name: "Krusty", img: "/img/Krusty.png" },
    { id: uniqid(), name: "Edna", img: "/img/Edna.png" },
    { id: uniqid(), name: "Barney", img: "/img/Barney.png" },
    { id: uniqid(), name: "Apu", img: "/img/Apu.png" },
    { id: uniqid(), name: "Millhouse", img: "/img/Millhouse.png" },
    { id: uniqid(), name: "Moe", img: "/img/Moe.png" },
    { id: uniqid(), name: "Mr. Burns", img: "/img/Burns.png" },
    { id: uniqid(), name: "Flanders", img: "/img/Flanders.png" },
    { id: uniqid(), name: "Ralph", img: "/img/Ralph.png" },
    { id: uniqid(), name: "Principal Skinner", img: "/img/Skinner.png" },
    { id: uniqid(), name: "Smithers", img: "/img/Smithers.png" },
    { id: uniqid(), name: "Nelson", img: "/img/Nelson.png" },
    { id: uniqid(), name: "Comic Book Guy", img: "/img/Comic.png" },
    { id: uniqid(), name: "Willie", img: "/img/Willie.png" },
    { id: uniqid(), name: "Chief Wiggum", img: "/img/Wiggum.png" },
    { id: uniqid(), name: "Lenny", img: "/img/Lenny.webp" },
    { id: uniqid(), name: "Lou", img: "/img/Lou.webp" },
    { id: uniqid(), name: "Carl", img: "/img/Carl.webp" },
  ];

  const [cardArray, setCardArray] = useState(characters.slice(0, 12));
  const [points, setPoints] = useState(0);

  // Randomly choose 12  characters
  const randomize = () => {
    const mixedCharacters = characters.sort((a, b) => 0.5 - Math.random());
    setCardArray(mixedCharacters.slice(0, 12));
  };

  // useEffect(() => {
  //   randomize();
  // }, [cardArray]);

  return (
    <div className="App">
      <Header points={points} />
      <div className={"mainSection"}>
        {cardArray.map((character) => (
          <Card
            key={uniqid()}
            character={character}
            randomize={randomize}
            points={points}
            setPoints={setPoints}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
