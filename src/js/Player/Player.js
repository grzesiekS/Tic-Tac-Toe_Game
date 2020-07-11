class Player {
  constructor(playerName, gameOption, gameTurn=false){
    const thisPlayer = this;
    thisPlayer.playerName = playerName;
    thisPlayer.score = 0;
    thisPlayer.gameTurn = gameTurn;
    thisPlayer.gameOption = gameOption;
  }

  addContentToDOMObject(element) {
    const thisPlayer = this;
    /*START IF: If innerHTML of DOM Object is not equal '' */
    if(element.innerHTML == '') {
      /*[DONE] Add gameOption to innerHTML */
      element.innerHTML = thisPlayer.gameOption;

      /*[DONE] Add atribute to DOM Object */
      thisPlayer.addAtributeToDOMObject(element);

    /*END IF: If innerHTML of DOM Object is not equal '' */
    }
  }

  changeGameTurn() {
    const thisPlayer = this;

    /*START IF: If Game Turn for the Player is true */
    if(thisPlayer.gameTurn){
      /* Change */
      thisPlayer.gameTurn = false;
    /*ELSE: If Game Turn for the Player is false */
    } else {
      thisPlayer.gameTurn = true;
    /*END IF: If Game Turn for the Player is true */
    }
  }

  addAtributeToDOMObject(element) {
    const thisPlayer = this;

    element.setAttribute('player-name', thisPlayer.playerName);
  }

  setPLayerScore() {
    const thisPlayer = this;

    thisPlayer.score++;
  }

  changePlayerScoreInPlayerPanel() {
    const thisPlayer = this;

    /*[DONE] Get player Panel for selected player*/
    const playerPanel = document.getElementById(thisPlayer.playerName);

    /*[DONE] Get score element from playerPanel */
    const scoreElement = playerPanel.querySelector('p');

    /*[DONE] Update score for selected player */
    scoreElement.innerHTML = 'Score: ' + thisPlayer.score;
  }

  changeActiveClassPlayerPanel() {
    const thisPlayer = this;

    /*[DONE] Get player Panel for selected player*/
    const playerPanel = document.getElementById(thisPlayer.playerName);

    /*START IF: If player game turn equals true*/
    if(thisPlayer.gameTurn) {
      playerPanel.classList.add('active');
    } else {
      playerPanel.classList.remove('active');
    /*END IF: If player game turn equals true*/
    }
  }
}

export default Player;
