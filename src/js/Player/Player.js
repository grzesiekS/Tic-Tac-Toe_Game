class Player {
  constructor(playerName, gameOption){
    const thisPlayer = this;
    thisPlayer.playerName = playerName;
    thisPlayer.score = 0;
    thisPlayer.gameTurn = false;
    thisPlayer.gameOption = gameOption;
  }
}

export default Player;
