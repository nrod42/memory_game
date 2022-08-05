import uniqid from "uniqid";
import Homer from "../img/Homer.png";
import Marge from "../img/Marge.png";
import Bart from "../img/Bart.png";
import Lisa from "../img/Lisa.png";
import Maggie from "../img/Maggie.png";
import Grandpa from "../img/Grandpa.png";
import Krusty from "../img/Krusty.png";
import Edna from "../img/Edna.png";
import Barney from "../img/Barney.png";
import Apu from "../img/Apu.png";
import Milhouse from "../img/Milhouse.png";
import Moe from "../img/Moe.png";
import Burns from "../img/Burns.png";
import Flanders from "../img/Flanders.png";
import Ralph from "../img/Ralph.png";
import Skinner from "../img/Skinner.png";
import Smithers from "../img/Smithers.png";
import Nelson from "../img/Nelson.png";
import Comic from "../img/Comic.png";
import Willie from "../img/Willie.png";
import Wiggum from "../img/Wiggum.png";
import Lenny from "../img/Lenny.webp";
import Lou from "../img/Lou.webp";
import Carl from "../img/Carl.webp";

const characters = [
  { id: uniqid(), name: "Homer", img: Homer },
  { id: uniqid(), name: "Marge", img: Marge },
  { id: uniqid(), name: "Bart", img: Bart },
  { id: uniqid(), name: "Lisa", img: Lisa },
  { id: uniqid(), name: "Maggie", img: Maggie },
  { id: uniqid(), name: "Grandpa", img: Grandpa },
  { id: uniqid(), name: "Krusty", img: Krusty },
  { id: uniqid(), name: "Edna", img: Edna },
  { id: uniqid(), name: "Barney", img: Barney },
  { id: uniqid(), name: "Apu", img: Apu },
  { id: uniqid(), name: "Milhouse", img: Milhouse },
  { id: uniqid(), name: "Moe", img: Moe },
  { id: uniqid(), name: "Mr. Burns", img: Burns },
  { id: uniqid(), name: "Ned Flanders", img: Flanders },
  { id: uniqid(), name: "Ralph", img: Ralph },
  { id: uniqid(), name: "Principal Skinner", img: Skinner },
  { id: uniqid(), name: "Mr. Smithers", img: Smithers },
  { id: uniqid(), name: "Nelson", img: Nelson },
  { id: uniqid(), name: "Comic Book Guy", img: Comic },
  { id: uniqid(), name: "Willie", img: Willie },
  { id: uniqid(), name: "Chief Wiggum", img: Wiggum },
  { id: uniqid(), name: "Lenny", img: Lenny },
  { id: uniqid(), name: "Lou", img: Lou },
  { id: uniqid(), name: "Carl", img: Carl },
];

// Randomly choose 12 characters from the character set
const randomize = () => {
  const mixedCharacters = characters.sort((a, b) => 0.5 - Math.random());
  return mixedCharacters.slice(0, 12);
};

export { characters, randomize };
