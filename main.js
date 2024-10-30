import { updateEnemyPositions } from "./js/updateEnemyPosition.js";
import { createEnemies } from "./js/createEnemies.js";
import { drawPlayer } from "./js/drawPlayer.js";
//Create 11 enemies and draw them initially
createEnemies();
drawPlayer();
function animate() {
  updateEnemyPositions();
  requestAnimationFrame(animate);
}

animate();
