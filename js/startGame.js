import { drawPlayer } from "./drawPlayer.js";
import { movePlayer } from "./movePlayer.js";
import { createEnemies } from "./createEnemies.js";
import { shootBullet } from "./shootBullet.js";
import { gameTimeCounter, maxTime } from "./updateGameTime.js";
import { animate } from "./animateGame.js";

function startGame(startGameBtn) {
  createEnemies();
  drawPlayer();
  animate();
  document.addEventListener("keydown", movePlayer);
  document.addEventListener("keydown", shootBullet);

  let intervalId = setInterval(gameTimeCounter, 1000); // start the game timer
  startGameBtn.disabled = true;

  setTimeout(() => handleGameOver(intervalId), maxTime * 1000);
}

export { startGame };
