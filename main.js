import { drawPlayer } from "./js/drawPlayer.js";
import { movePlayer } from "./js/movePlayer.js";
import { updateEnemyPositions } from "./js/updateEnemyPosition.js";
import { createEnemies } from "./js/createEnemies.js";
import { shootBullet } from "./js/shootBullet.js";

createEnemies();
drawPlayer();
document.addEventListener("keydown", movePlayer); // Event listener to move the player
shootBullet();

function animate() {
  updateEnemyPositions();
  requestAnimationFrame(animate);
}

animate();
