export default class newGame {
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
    let cellActive = this.allElements.find((el) =>
      el.classList.contains("active")
    );
    cellActive.classList.remove("active");
  }

  activateRandom(number) {
    const cellTarget = this.allElements[number - 1];
    this.deactivateCell();
    cellTarget.classList.add("active");
  }
}
