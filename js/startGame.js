import { drawPlayer } from "./drawPlayer.js";
import { createEnemies } from "./createEnemies.js";
import { gameTimeCounter, setTimerController } from "./updateGameTime.js";
import { animate } from "./animateGame.js";
import { togglePause } from "./togglePause.js";
import { startEnemyShooting } from "./startEnemyShooting.js";
import { addMovePlayerAndShootBulletEvents } from "./addAndRemoveEvents.js";

function startGame(startGameBtn) {
  createEnemies();
  drawPlayer();
  animate();
  addMovePlayerAndShootBulletEvents()
  const timerController = {
    intervalId: setInterval(gameTimeCounter, 1000), // start the game timer
    isPaused: false,
  };

  setTimerController(timerController); // Set the timer controller

  startGameBtn.disabled = true;

  togglePause(timerController);
  startEnemyShooting(timerController);
}

export { startGame };