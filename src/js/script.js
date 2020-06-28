import Game from './Game/Game.js';

const app = {
  initGame:  function() {
    new Game(document.querySelector('.game_content'));
  },

  init: function() {
    const thisApp = this;

    thisApp.initGame();
  },
};

app.init();