import Game from './Game/Game.js';
import { wrappers } from './DataSource.js';

const app = {
  initGame: () => {
    new Game(document.querySelector(wrappers.gameContent));
  },

  init: () => {
    app.initGame();
  },
};

app.init();
