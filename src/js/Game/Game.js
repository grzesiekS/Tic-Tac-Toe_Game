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
    thisGame.AddPlayersNameToPlayerPanel();
    thisGame.AddPlayerScoreToPlayerPanel();
    thisGame.setActivePlayerPanel();

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

          thisGame.setActivePlayerPanel();

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
        thisGame.gameResult(gameFields.field_1);
      }

    /*END IF: First row equals */
    }

    /*START IF: Second row equals */
    if(gameFields.field_4 == gameFields.field_5 && gameFields.field_5 == gameFields.field_6){

      if(gameFields.field_4 != null) {
        thisGame.gameResult(gameFields.field_4);
      }

    /*END IF: Second row equals */
    }

    /*START IF: third row equals */
    if(gameFields.field_7 == gameFields.field_8 && gameFields.field_8 == gameFields.field_9){

      if(gameFields.field_7 != null) {
        thisGame.gameResult(gameFields.field_7);
      }

    /*END IF: third row equals */
    }

    /*START IF: First column equals */
    if(gameFields.field_1 == gameFields.field_4 && gameFields.field_4 == gameFields.field_7){

      if(gameFields.field_1 != null) {
        thisGame.gameResult(gameFields.field_1);
      }

    /*END IF: First column equals */
    }

    /*START IF: Second column equals */
    if(gameFields.field_2 == gameFields.field_5 && gameFields.field_5 == gameFields.field_8){

      if(gameFields.field_2 != null) {
        thisGame.gameResult(gameFields.field_2);
      }

    /*END IF: Second column equals */
    }

    /*START IF: Third column equals */
    if(gameFields.field_3 == gameFields.field_6 && gameFields.field_6 == gameFields.field_9){

      if(gameFields.field_3 != null) {
        thisGame.gameResult(gameFields.field_3);
      }

    /*END IF: Third column equals */
    }

    /*START IF: Cross left */
    if(gameFields.field_1 == gameFields.field_5 && gameFields.field_5 == gameFields.field_9){

      if(gameFields.field_1 != null) {
        thisGame.gameResult(gameFields.field_1);
      }

    /*END IF: Cross left */
    }

    /*START IF: Cross right */
    if(gameFields.field_3 == gameFields.field_5 && gameFields.field_5 == gameFields.field_7){

      if(gameFields.field_3 != null) {
        thisGame.gameResult(gameFields.field_3);
      }

    /*END IF: Cross right */
    }

    /*START IF:  If Null count is equal or lower then 2*/
    if (thisGame.countNullInObject(gameFields) < 2) {
      thisGame.gameReset();
    /*END IF:  If Null count is equal or lower then 2*/
    }
  }

  gameReset() {
    const thisGame = this;

    thisGame.dom.gameContent.forEach(element => {
      element.removeAttribute('player-name');
      element.innerHTML = '';
    });
  }

  gameResult(winnerName) {
    const thisGame = this;

    thisGame.changePlayerScore(winnerName);
    thisGame.setActivePlayerPanel();
    thisGame.gameReset();
  }

  countNullInObject(objArray) {
    let countNull = 0;

    for(let obj in objArray) {
      /*END IF: If obj has value equals null */
      if(objArray[obj] == null) {
        /*[DONE] increment countNull value */
        countNull++;
      /*END IF: If obj has value equals null */
      }
    }

    return countNull;
  }

  createDOMelement(element){
    const DOMelement = document.createElement(element);
    return DOMelement;
  }

  appendChildToDOMelement(element, parent, content) {
    element.innerHTML = content;
    parent.appendChild(element);
  }

  AddPlayersNameToPlayerPanel() {
    const thisGame = this;

    thisGame.appendChildToDOMelement(thisGame.createDOMelement('h1'), thisGame.dom.playerPanel[0], thisGame.players.player1.playerName);
    thisGame.appendChildToDOMelement(thisGame.createDOMelement('h1'), thisGame.dom.playerPanel[1], thisGame.players.player2.playerName);

    thisGame.setAttributeToDOMelement(thisGame.dom.playerPanel[0],'id',thisGame.players.player1.playerName);
    thisGame.setAttributeToDOMelement(thisGame.dom.playerPanel[1],'id',thisGame.players.player2.playerName);
  }

  AddPlayerScoreToPlayerPanel() {
    const thisGame= this;

    thisGame.appendChildToDOMelement(thisGame.createDOMelement('p'), thisGame.dom.playerPanel[0], 'Score: ' + thisGame.players.player1.score);
    thisGame.appendChildToDOMelement(thisGame.createDOMelement('p'), thisGame.dom.playerPanel[1], 'Score: ' + thisGame.players.player2.score);
  }

  setAttributeToDOMelement(element, attribute, attValue) {
    element.setAttribute(attribute, attValue);
  }

  changePlayerScore(name) {
    const thisGame = this;

    /*START LOOP: for every player in players */
    for(let player in thisGame.players) {
      /*[DONE] Get player details*/
      const playerDetails = thisGame.players[player];

      /*START IF: player name equals name */
      if(playerDetails.playerName == name) {
        /*[DONE] Change player score*/
        playerDetails.setPLayerScore();

        /*[DONE] Update player Panel*/
        playerDetails.changePlayerScoreInPlayerPanel();

      /*END IF: player name equals name */
      }

      /*END LOOP: for every player in players */
    }
  }

  setActivePlayerPanel() {
    const thisGame = this;

    /*START LOOP: For All players*/
    for(let player in thisGame.players) {
      /* Set active player panel */
      thisGame.players[player].changeActiveClassPlayerPanel();

    /*END LOOP: For All players*/
    }
  }

  getElement(element) {
    const thisGame = this;

    thisGame.dom = {};
    thisGame.dom.wrapper = element;
    thisGame.dom.gameContent = thisGame.dom.wrapper.querySelectorAll(gameContent.gameContentField);
    thisGame.dom.playerPanel = thisGame.dom.wrapper.querySelectorAll(gameContent.playerPanel);
  }
}

export default Game;
