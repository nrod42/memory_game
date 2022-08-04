import React from "react";

const Card = (props) => {
  const { setPoints, randomize } = props;
  //   const randomize = props.randomize;
  const { id, name, img } = props.character;

  const handleClick = () => {
    randomize();
    setPoints((prevState) => prevState + 1);
  };
  return (
    <div className="card" onClick={handleClick}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
