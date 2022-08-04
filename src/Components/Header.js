import React from "react";

const Header = (props) => {
  const { points } = props;
  return (
    <div className="header">
      <h1>The Simpsons Memory Game</h1>

      <p>Points: {points}</p>
    </div>
  );
};

export default Header;
