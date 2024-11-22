import { drawPlayer } from "./drawPlayer.js";
import { movePlayer } from "./movePlayer.js";
import { createEnemies } from "./createEnemies.js";
import { shootBullet } from "./shootBullet.js";
import { gameTimeCounter, maxTime } from "./updateGameTime.js";
import { animate, handleGameOver } from "./animateGame.js";
import { togglePause } from "./togglePause.js";
import { startEnemyShooting } from "./startEnemyShooting.js";

function startGame(startGameBtn, pauseGameBtn) {
  createEnemies();
  drawPlayer();
  animate();
  document.addEventListener("keydown", movePlayer);
  document.addEventListener("keydown", shootBullet);

  const timerController = {
    intervalId: setInterval(gameTimeCounter, 1000), // start the game timer
    isPaused: false,
  };

  startGameBtn.disabled = true;

  setTimeout(() => handleGameOver(timerController.intervalId), maxTime * 1000);

  togglePause(pauseGameBtn, timerController);
  startEnemyShooting()
}

export { startGame };