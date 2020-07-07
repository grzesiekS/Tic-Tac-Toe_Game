import { gameContent } from '../DataSource.js';
import Player from '../Player/Player.js';

class Game {
  constructor(element) {
    const thisGame = this;

    thisGame.players = {
      player1: new Player('Player1',gameContent.options.cross, true),
      player2: new Player('Player2',gameContent.options.circle),
    };

    thisGame.getElement(element);
    thisGame.initActions();
  }

  initActions() {
    const thisGame = this;

    thisGame.dom.gameContent.forEach(element => {
      element.addEventListener('click', function(){
        event.preventDefault();

        /*START LOOP: For each player in players object */
        for(let player in thisGame.players) {
          /* Get player options from object players */
          const playerOpt = thisGame.players[player];

          /*START IF: If player has gameTurn true*/
          if(playerOpt.gameTurn == true){
            /* Add element (cross/circle) to DOM Object*/
            playerOpt.addContentToDOMObject(element);
          /*END IF: If player has gameTurn true*/
          }

        /*END LOOP: For each player in players object */
        }
      });
    });
  }

  getElement(element) {
    const thisGame = this;

    thisGame.dom = {};
    thisGame.dom.wrapper = element;
    thisGame.dom.gameContent = thisGame.dom.wrapper.querySelectorAll(gameContent.gameContentField);
  }
}

export default Game;
