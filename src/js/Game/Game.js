import { gameContent } from '../DataSource.js';

class Game {
  constructor(element) {
    const thisGame = this;

    thisGame.getElement(element);
  }

  getElement(element) {
    const thisGame = this;

    thisGame.dom = {};
    thisGame.dom.wrapper = element;
    thisGame.dom.gameContent = thisGame.dom.wrapper.querySelectorAll(gameContent.gameContentField);

  }
}

export default Game;
