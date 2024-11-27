import { drawPlayer } from "./drawPlayer.js";
import { movePlayer } from "./movePlayer.js";
import { createEnemies } from "./createEnemies.js";
import { shootBullet } from "./shootBullet.js";
import { gameTimeCounter, setTimerController } from "./updateGameTime.js";
import { animate } from "./animateGame.js";
import { togglePause } from "./togglePause.js";
import { startEnemyShooting } from "./startEnemyShooting.js";

function startGame(startGameBtn) {
  createEnemies();
  drawPlayer();
  animate();
  document.addEventListener("keydown", movePlayer);
  document.addEventListener("keydown", shootBullet);

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