import newGame from "./game/game";

const CELLS_COUNT = 16;

document.addEventListener("DOMContentLoaded", () => {
  const cells = [...document.querySelectorAll(".cell")];

  const newField = new newGame(cells);
  newField.initGame(CELLS_COUNT);

  // eslint-disable-next-line no-unused-vars
  const gameInterval = setInterval(() => {
    const nextCell = Math.floor(1 + Math.random() * CELLS_COUNT);
    newField.activateRandom(nextCell);
  }, 2000);
});
