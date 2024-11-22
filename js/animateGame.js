import { counter, maxTime } from "./updateGameTime.js";
import { updateEnemyPositions } from "./updateEnemyPosition.js";
import { stopEnemyShooting } from "./startEnemyShooting.js";
import { hideEnemies } from "./hideEnemies.js";
import { hidePlayer } from "./drawPlayer.js";
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


function handleGameOver(intervalId) {
  clearInterval(intervalId);
  stopAnimation();
  stopEnemyShooting();
  hidePlayer();
  hideEnemies();
  const gameContainer = document.querySelector(".game-container");
  gameContainer.innerHTML = "<p>Game Over!</p>";
}


export { animate, stopAnimation, handleGameOver };