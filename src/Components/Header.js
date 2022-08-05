import React from "react";

const Header = (props) => {
  const { score, best, toggleSound, isPlaying } = props;
  return (
    <header className="header">
      <div className="spacerDiv"></div>
      <h1>The Simpsons Memory Game</h1>
      <div className="score">
        <p className="bestScore">Best Score: {best}</p>
        <p>Current Score: {score}</p>
      </div>
      <button className={"playBtn"} onClick={toggleSound}>
        <img
          src={
            window.location.origin +
            (isPlaying ? "/img/volume.svg" : "/img/mute.svg")
          }
          alt={isPlaying ? "sound on button" : "mute button"}
        ></img>
      </button>
    </header>
  );
};

export default Header;
