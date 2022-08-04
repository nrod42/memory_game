import uniqid from 'uniqid'

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
    { id: uniqid(), name: "Milhouse", img: "/img/Milhouse.png" },
    { id: uniqid(), name: "Moe", img: "/img/Moe.png" },
    { id: uniqid(), name: "Mr. Burns", img: "/img/Burns.png" },
    { id: uniqid(), name: "Ned Flanders", img: "/img/Flanders.png" },
    { id: uniqid(), name: "Ralph", img: "/img/Ralph.png" },
    { id: uniqid(), name: "Principal Skinner", img: "/img/Skinner.png" },
    { id: uniqid(), name: "Mr. Smithers", img: "/img/Smithers.png" },
    { id: uniqid(), name: "Nelson", img: "/img/Nelson.png" },
    { id: uniqid(), name: "Comic Book Guy", img: "/img/Comic.png" },
    { id: uniqid(), name: "Willie", img: "/img/Willie.png" },
    { id: uniqid(), name: "Chief Wiggum", img: "/img/Wiggum.png" },
    { id: uniqid(), name: "Lenny", img: "/img/Lenny.webp" },
    { id: uniqid(), name: "Lou", img: "/img/Lou.webp" },
    { id: uniqid(), name: "Carl", img: "/img/Carl.webp" },
  ];

// Randomly choose 12  characters
  const randomize = () => {
    const mixedCharacters = characters.sort((a, b) => 0.5 - Math.random());
    return mixedCharacters.slice(0, 12);
  };

  export { characters, randomize };