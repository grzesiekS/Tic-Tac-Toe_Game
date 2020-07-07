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

      /* Add atribute to DOM Object */
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
}

export default Player;
