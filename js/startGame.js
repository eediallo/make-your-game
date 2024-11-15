import { drawPlayer, hidePlayer } from "./drawPlayer.js";
import { movePlayer } from "./movePlayer.js";
import { updateEnemyPositions, hideEnemies } from "./updateEnemyPosition.js";
import { createEnemies } from "./createEnemies.js";
import { shootBullet } from "./shootBullet.js";
import { gameTimeCounter, counter, maxTime } from "./updateGameTime.js";

function startGame(startGameBtn) {
  createEnemies();
  drawPlayer();
  document.addEventListener("keydown", movePlayer);
  shootBullet();

  function animate() {
    updateEnemyPositions();
    if (counter < maxTime) {
      requestAnimationFrame(animate);
    }
  }
  animate();

  // start the game timer
  let intervalId = setInterval(gameTimeCounter, 1000);

  // start the counter in seconds
  startGameBtn.disabled = true;

  setTimeout(() => {
    clearInterval(intervalId); // Clear the interval locally
    hidePlayer();
    hideEnemies();
    const gameContainer = document.getElementById("gameContainer");
    gameContainer.innerHTML = "<p>Game Over!</p>";
  }, maxTime * 1000);
}

export { startGame };