import Game from './Game/Game.js';

const app = {
  initGame: () => {
    new Game(document.querySelector('.game_content'));
  },

  init: () => {
    app.initGame();
  },
};

app.init();