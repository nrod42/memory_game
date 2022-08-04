import React from "react";

const Header = (props) => {
  const { score, best } = props;
  return (
    <header className="header">
      <h1>The Simpsons Memory Game</h1>
      <div className="score">
        <p className="bestScore">Best Score: {best}</p>
        <p>Current Score: {score}</p>
      </div>
    </header>
  );
};

export default Header;
