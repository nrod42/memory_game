import uniqid from "uniqid";
// // import Homer from "../img/Homer.png";
// import Marge from "../img/Marge.png";
// import Bart from "../img/Bart.png";
// import Lisa from "../img/Lisa.png";
// import Maggie from "../img/Maggie.png";
// import Grandpa from "../img/Grandpa.png";
// import Krusty from "../img/Krusty.png";
// import Edna from "../img/Edna.png";
// import Barney from "../img/Barney.png";
// import Apu from "../img/Apu.png";
// import Milhouse from "../img/Milhouse.png";
// import Moe from "../img/Moe.png";
// import Burns from "../img/Burns.png";
// import Flanders from "../img/Flanders.png";
// import Ralph from "../img/Ralph.png";
// import Skinner from "../img/Skinner.png";
// import Smithers from "../img/Smithers.png";
// import Nelson from "../img/Nelson.png";
// import Comic from "../img/Comic.png";
// import Willie from "../img/Willie.png";
// import Wiggum from "../img/Wiggum.png";
// import Lenny from "../img/Lenny.webp";
// import Lou from "../img/Lou.webp";
// import Carl from "../img/Carl.webp";

const characters = [
  { id: uniqid(), name: "Homer", img: require("../img/Homer.png") },
  { id: uniqid(), name: "Marge", img: require("../img/Marge.png") },
  { id: uniqid(), name: "Bart", img: require("../img/Bart.png") },
  { id: uniqid(), name: "Lisa", img: require("../img/Lisa.png") },
  { id: uniqid(), name: "Maggie", img: require("../img/Maggie.png") },
  { id: uniqid(), name: "Grandpa", img: require("../img/Grandpa.png") },
  { id: uniqid(), name: "Krusty", img: require("../img/Krusty.png") },
  { id: uniqid(), name: "Edna", img: require("../img/Edna.png") },
  { id: uniqid(), name: "Barney", img: require("../img/Barney.png") },
  { id: uniqid(), name: "Apu", img: require("../img/Apu.png") },
  { id: uniqid(), name: "Milhouse", img: require("../img/Milhouse.png") },
  { id: uniqid(), name: "Moe", img: require("../img/Moe.png") },
  { id: uniqid(), name: "Mr. Burns", img: require("../img/Burns.png") },
  { id: uniqid(), name: "Ned Flanders", img: require("../img/Flanders.png") },
  { id: uniqid(), name: "Ralph", img: require("../img/Ralph.png") },
  {
    id: uniqid(),
    name: "Principal Skinner",
    img: require("../img/Skinner.png"),
  },
  { id: uniqid(), name: "Mr. Smithers", img: require("../img/Smithers.png") },
  { id: uniqid(), name: "Nelson", img: require("../img/Nelson.png") },
  { id: uniqid(), name: "Comic Book Guy", img: require("../img/Comic.png") },
  { id: uniqid(), name: "Willie", img: require("../img/Willie.png") },
  { id: uniqid(), name: "Chief Wiggum", img: require("../img/Wiggum.png") },
  { id: uniqid(), name: "Lenny", img: require("../img/Lenny.webp") },
  { id: uniqid(), name: "Lou", img: require("../img/Lou.webp") },
  { id: uniqid(), name: "Carl", img: require("../img/Carl.webp") },
];

// Randomly choose 12 characters from the character set
const randomize = () => {
  const mixedCharacters = characters.sort((a, b) => 0.5 - Math.random());
  return mixedCharacters.slice(0, 12);
};

export { characters, randomize };
