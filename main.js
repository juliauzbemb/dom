/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game/game.js
class newGame {
  constructor(elements) {
    this._elements = elements;
  }
  get allElements() {
    return this._elements;
  }
  initGame(number) {
    let cellActiveNumber = Math.floor(1 + Math.random() * number);
    const cellTarget = this.allElements[cellActiveNumber - 1];
    cellTarget.classList.add("active");
  }
  deactivateCell() {
    let cellActive = this.allElements.find(el => el.classList.contains("active"));
    cellActive.classList.remove("active");
  }
  activateRandom(number) {
    const cellTarget = this.allElements[number - 1];
    this.deactivateCell();
    cellTarget.classList.add("active");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

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
;// CONCATENATED MODULE: ./src/index.js





// TODO: write your code in app.js
/******/ })()
;