import { updateEnemyPositions } from "./js/updateEnemyPosition.js";
import { createEnemies } from "./js/createEnemies.js";

createEnemies(); //Create 11 enemies and draw them initially
function animate() {
  updateEnemyPositions();
  requestAnimationFrame(animate);
}

animate();
