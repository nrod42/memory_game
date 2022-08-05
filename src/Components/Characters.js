import uniqid from "uniqid";

const characters = [
  { id: uniqid(), name: "Homer", img: require("../img/Homer.webp") },
  { id: uniqid(), name: "Marge", img: require("../img/Marge.webp") },
  { id: uniqid(), name: "Bart", img: require("../img/Bart.webp") },
  { id: uniqid(), name: "Lisa", img: require("../img/Lisa.webp") },
  { id: uniqid(), name: "Maggie", img: require("../img/Maggie.webp") },
  { id: uniqid(), name: "Grandpa", img: require("../img/Grandpa.webp") },
  { id: uniqid(), name: "Krusty", img: require("../img/Krusty.webp") },
  { id: uniqid(), name: "Edna", img: require("../img/Edna.webp") },
  { id: uniqid(), name: "Barney", img: require("../img/Barney.webp") },
  { id: uniqid(), name: "Apu", img: require("../img/Apu.webp") },
  { id: uniqid(), name: "Milhouse", img: require("../img/Milhouse.webp") },
  { id: uniqid(), name: "Moe", img: require("../img/Moe.webp") },
  { id: uniqid(), name: "Mr. Burns", img: require("../img/Burns.webp") },
  { id: uniqid(), name: "Ned Flanders", img: require("../img/Flanders.webp") },
  { id: uniqid(), name: "Ralph", img: require("../img/Ralph.webp") },
  {
    id: uniqid(),
    name: "Principal Skinner",
    img: require("../img/Skinner.webp"),
  },
  { id: uniqid(), name: "Mr. Smithers", img: require("../img/Smithers.webp") },
  { id: uniqid(), name: "Nelson", img: require("../img/Nelson.webp") },
  { id: uniqid(), name: "Comic Book Guy", img: require("../img/Comic.webp") },
  { id: uniqid(), name: "Willie", img: require("../img/Willie.webp") },
  { id: uniqid(), name: "Chief Wiggum", img: require("../img/Wiggum.webp") },
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
