import React from "react";
import volume from "../img/volume.svg";
import mute from "../img/mute.svg";

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
          src={window.location.origin + (isPlaying ? volume : mute)}
          alt={isPlaying ? "sound on button" : "mute button"}
        ></img>
      </button>
    </header>
  );
};

export default Header;
