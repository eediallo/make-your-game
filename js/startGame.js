import { drawPlayer, hidePlayer } from "./drawPlayer.js";
import { movePlayer } from "./movePlayer.js";
import { updateEnemyPositions } from "./updateEnemyPosition.js";
import { hideEnemies } from "./hideEnemies.js";
import { createEnemies } from "./createEnemies.js";
import { shootBullet } from "./shootBullet.js";
import { gameTimeCounter, counter, maxTime } from "./updateGameTime.js";

function startGame(startGameBtn) {
  createEnemies();
  drawPlayer();
  document.addEventListener("keydown", movePlayer);
  shootBullet();

  //==========animate====================
  function animate() {
    updateEnemyPositions();
    if (counter < maxTime) {
      requestAnimationFrame(animate);
    }
  }
  animate();

  //=======================================

  let intervalId = setInterval(gameTimeCounter, 1000); // start the game timer
  startGameBtn.disabled = true;

  //=======================handleGameOver========================
  function handleGameOver(intervalId) {
    clearInterval(intervalId);
    hidePlayer();
    hideEnemies();
    const gameContainer = document.querySelector(".game-container");
    gameContainer.innerHTML = "<p>Game Over!</p>";
  }

  setTimeout(() => handleGameOver(intervalId), maxTime * 1000);

  //===========================================================
}

export { startGame };
