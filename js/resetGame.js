import { animate, stopAnimation } from "./animateGame.js";
import { gameTimeCounter, counter } from "./updateGameTime.js";
import { movePlayer } from "./movePlayer.js";
import { shootBullet } from "./shootBullet.js";
import { createEnemies } from "./createEnemies.js";
import { drawPlayer } from "./drawPlayer.js";
import { newPlayer } from "./config.js";
import { newBullet } from "./createBullet.js";
import { stopEnemyShooting } from "./startEnemyShooting.js";

function resetGame(timerController) {
  // Reset game state
  newPlayer.x = 50;
  newPlayer.y = 0;
  newBullet.activeBullet = null;
  document.querySelector("#score").textContent = "Score: 0";
  document.querySelector("#game-time").textContent = "Time: 00";
  document.querySelector("#lives").textContent = "Lives: 10";
  newPlayer.lives = 10;


  const gameContainer = document.querySelector(".game-container");
  gameContainer.innerHTML = "";


  createEnemies();
  drawPlayer();

  // Stop any ongoing animations and intervals
  stopAnimation();
  clearInterval(timerController.intervalId);
  stopEnemyShooting();

  // Restart the game
  timerController.isPaused = false;
  timerController.intervalId = setInterval(gameTimeCounter, 1000);
  animate();
  document.addEventListener("keydown", movePlayer);
  document.addEventListener("keydown", shootBullet);
}

export { resetGame };