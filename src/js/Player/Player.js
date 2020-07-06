class Player {
  constructor(playerName, gameOption, gameTurn=false){
    const thisPlayer = this;
    thisPlayer.playerName = playerName;
    thisPlayer.score = 0;
    thisPlayer.gameTurn = gameTurn;
    thisPlayer.gameOption = gameOption;
  }

  addClassToElement(element) {
    const thisPlayer = this;

    /*START IF: If element classList value is not empty string */
    if(element.classList.value == ''){
      /*[DONE] Add class to element */
      element.classList.add(...thisPlayer.gameOption);

    /*END IF: If element classList value is not empty string */
    }
  }
}

export default Player;
