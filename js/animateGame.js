import { counter, maxTime } from "./updateGameTime.js";
import { updateEnemyPositions } from "./updateEnemyPosition.js";
let reqAnim;

function animate() {
  updateEnemyPositions();
  if (counter < maxTime) {
    reqAnim = requestAnimationFrame(animate);
  }
}

function stopAnimation() {
  cancelAnimationFrame(reqAnim);
}

export { animate, stopAnimation };