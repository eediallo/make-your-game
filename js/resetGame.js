import { newPlayer } from "./config.js";
import { createEnemies } from "./createEnemies.js";
import { drawPlayer } from "./drawPlayer.js";
import { animate } from "./animateGame.js";
import { gameTimeCounter, resetCounter, setTimerController } from "./updateGameTime.js";
import { startEnemyShooting } from "./startEnemyShooting.js";
import { resetScore } from "./updateScore.js";
import { movePlayer } from "./movePlayer.js";
import { shootBullet } from "./shootBullet.js";

function resetGame(timerController) {
  if (timerController.isPaused) return; // Do not update the counter if the game is paused

  // Reset game state
  newPlayer.x = 50;
  newPlayer.y = 0;
  newPlayer.lives = 5;
  document.querySelector("#score").textContent = "Score: 0";
  document.querySelector("#game-time").textContent = "Time: 00";
  document.querySelector("#lives").textContent = "Lives: 5";

  // Reset timer
  clearInterval(timerController.intervalId);
  resetCounter();
  timerController.intervalId = setInterval(() => {
    gameTimeCounter();
  }, 1000);

  resetScore();

  // Reinitialize enemies and player
  createEnemies();
  drawPlayer();

  // Restart game animation and enemy shooting
  animate();
  startEnemyShooting(timerController);

  // Re-enable player controls
  document.addEventListener("keydown", movePlayer);
  document.addEventListener("keydown", shootBullet);

  // Set the timer controller
  setTimerController(timerController);
}

export { resetGame };