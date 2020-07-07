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
    /*END IF: If innerHTML of DOM Object is not equal '' */
    }
  }
}

export default Player;
