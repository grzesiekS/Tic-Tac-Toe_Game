import { gameContent } from '../DataSource.js';

class Game {
  constructor(element) {
    const thisGame = this;

    thisGame.getElement(element);
    thisGame.initActions();
  }

  initActions() {
    const thisGame = this;

    thisGame.dom.gameContent.forEach(element => {
      element.addEventListener('click', function(){
        event.preventDefault();
      });
    });
  }

  getElement(element) {
    const thisGame = this;

    thisGame.dom = {};
    thisGame.dom.wrapper = element;
    thisGame.dom.gameContent = thisGame.dom.wrapper.querySelectorAll(gameContent.gameContentField);
    console.log(thisGame.dom.gameContent);
  }
}

export default Game;
