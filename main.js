import { drawPlayer } from "./js/drawPlayer.js";
import { movePlayer } from "./js/movePlayer.js";
import { updateEnemyPositions } from "./js/updateEnemyPosition.js";
import { createEnemies } from "./js/createEnemies.js";
import { createBullet } from "./js/createBullet.js";

createEnemies();
drawPlayer();

// Event listener to move the player
document.addEventListener("keydown", movePlayer);

createBullet();

function animate() {
  updateEnemyPositions();
  requestAnimationFrame(animate);
}

animate();
