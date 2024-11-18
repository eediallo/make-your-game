import { drawPlayer, hidePlayer } from "./drawPlayer.js";
import { movePlayer } from "./movePlayer.js";
import { createEnemies } from "./createEnemies.js";
import { shootBullet } from "./shootBullet.js";
import { gameTimeCounter, maxTime } from "./updateGameTime.js";
import { animate } from "./animateGame.js";

function startGame(startGameBtn) {
  createEnemies();
  drawPlayer();
  document.addEventListener("keydown", movePlayer);
  shootBullet();

  animate();

  let intervalId = setInterval(gameTimeCounter, 1000); // start the game timer
  startGameBtn.disabled = true;

  setTimeout(() => handleGameOver(intervalId), maxTime * 1000);
}

export { startGame };
