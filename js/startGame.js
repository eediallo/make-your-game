import { drawPlayer } from "./drawPlayer.js";
import { movePlayer } from "./movePlayer.js";
import { updateEnemyPositions } from "./updateEnemyPosition.js";
import { createEnemies } from "./createEnemies.js";
import { shootBullet } from "./shootBullet.js";

function startGame(startGameBtn) {
  createEnemies();
  drawPlayer();
  document.addEventListener("keydown", movePlayer);
  shootBullet();

  function animate() {
    updateEnemyPositions();
    requestAnimationFrame(animate);
  }
  animate();
  startGameBtn.disabled = true;
}

export { startGame };
