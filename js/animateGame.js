import { counter, maxTime } from "./updateGameTime.js";
import { updateEnemyPositions } from "./updateEnemyPosition.js";
import { stopEnemyShooting } from "./startEnemyShooting.js";
import { hideEnemies } from "./hideEnemies.js";
import { hidePlayer } from "./drawPlayer.js";
import { updateScore } from "./updateScore.js";
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
  const score = document.querySelector('#score')
  const gameTimer = document.querySelector('#game-time')
  const lives = document.querySelector('#lives')
  gameContainer.innerHTML = `
    <div class="scoreboard">
      <h1>Game Over!</h1>
      <p>${score.innerHTML}</p>
       <p>${gameTimer.innerHTML}</p>
      <p>${lives.innerHTML}</p>
    </div>
  `;

  // Center the scoreboard
  const scoreboardStyle = document.createElement("style");
  scoreboardStyle.innerHTML = `
    .scoreboard {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 20px;
      border-radius: 10px;
    }
  `;
  document.head.appendChild(scoreboardStyle);
}

export { animate, stopAnimation, handleGameOver };