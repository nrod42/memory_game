import React from "react";

const Card = (props) => {
  const { handleClick } = props;
  const { id, name, img } = props.character;

  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img className={"cardImg"} src={img} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
