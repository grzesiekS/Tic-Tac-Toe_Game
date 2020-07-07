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

        if(element.innerHTML == '') {
          /*START LOOP: For each player in players object */
          for(let player in thisGame.players) {
            /* Get player options from object players */
            const playerOpt = thisGame.players[player];

            /*START IF: If player has gameTurn true*/
            if(playerOpt.gameTurn){
              /*[DONE] Add element (cross/circle) to DOM Object*/
              playerOpt.addContentToDOMObject(element);

              /*[DONE] Change players turn */
              playerOpt.changeGameTurn();

            /*ELSE: If player has gameTurn true*/
            } else {
              /*[DONE] Change players turn */
              playerOpt.changeGameTurn();

            /*END IF: If player has gameTurn true*/
            }
          /*END LOOP: For each player in players object */
          }

          thisGame.gameEnd();
        }
      });
    });
  }

  gameEnd() {
    const thisGame = this;
    const gameFields = {
      field_1: thisGame.dom.gameContent[0].getAttribute('player-name'),
      field_2: thisGame.dom.gameContent[1].getAttribute('player-name'),
      field_3: thisGame.dom.gameContent[2].getAttribute('player-name'),
      field_4: thisGame.dom.gameContent[3].getAttribute('player-name'),
      field_5: thisGame.dom.gameContent[4].getAttribute('player-name'),
      field_6: thisGame.dom.gameContent[5].getAttribute('player-name'),
      field_7: thisGame.dom.gameContent[6].getAttribute('player-name'),
      field_8: thisGame.dom.gameContent[7].getAttribute('player-name'),
      field_9: thisGame.dom.gameContent[8].getAttribute('player-name'),
    };

    /*START IF: First row equals */
    if(gameFields.field_1 == gameFields.field_2 && gameFields.field_2 == gameFields.field_3){

      if(gameFields.field_1 != null) {
        thisGame.gameReset();
      }

    /*END IF: First row equals */
    }

    /*START IF: Second row equals */
    if(gameFields.field_4 == gameFields.field_5 && gameFields.field_5 == gameFields.field_6){

      if(gameFields.field_4 != null) {
        thisGame.gameReset();
      }

    /*END IF: Second row equals */
    }

    /*START IF: third row equals */
    if(gameFields.field_7 == gameFields.field_8 && gameFields.field_8 == gameFields.field_9){

      if(gameFields.field_7 != null) {
        thisGame.gameReset();
      }

    /*END IF: third row equals */
    }

    /*START IF: First column equals */
    if(gameFields.field_1 == gameFields.field_4 && gameFields.field_4 == gameFields.field_7){

      if(gameFields.field_1 != null) {
        thisGame.gameReset();
      }

    /*END IF: First column equals */
    }

    /*START IF: Second column equals */
    if(gameFields.field_2 == gameFields.field_5 && gameFields.field_5 == gameFields.field_8){

      if(gameFields.field_2 != null) {
        thisGame.gameReset();
      }

    /*END IF: Second column equals */
    }

    /*START IF: Third column equals */
    if(gameFields.field_3 == gameFields.field_6 && gameFields.field_6 == gameFields.field_9){

      if(gameFields.field_3 != null) {
        thisGame.gameReset();
      }

    /*END IF: Third column equals */
    }

    /*START IF: Cross left */
    if(gameFields.field_1 == gameFields.field_5 && gameFields.field_5 == gameFields.field_9){

      if(gameFields.field_1 != null) {
        thisGame.gameReset();
      }

    /*END IF: Cross left */
    }

    /*START IF: Cross right */
    if(gameFields.field_3 == gameFields.field_5 && gameFields.field_5 == gameFields.field_7){

      if(gameFields.field_3 != null) {
        thisGame.gameReset();
      }

    /*END IF: Cross right */
    }
  }

  gameReset() {
    const thisGame = this;

    thisGame.dom.gameContent.forEach(element => {
      element.removeAttribute('player-name');
      element.innerHTML = '';
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
