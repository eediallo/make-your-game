import { newBullet } from "./createBullet.js";
import { moveBulletDownwards } from "./moveBulletDownwards.js";

function createEnemyBullet(timerController) {
  const gameContainer = document.querySelector(".game-container");
  const containerRect = gameContainer.getBoundingClientRect();

  const bullet = document.createElement("div");
  bullet.classList.add("enemy-bullet");
  bullet.style.width = `${newBullet.width}px`;
  bullet.style.height = `${newBullet.height}px`;
  bullet.style.position = "absolute";
  bullet.style.left = `${Math.random() * (containerRect.width - newBullet.width)}px`;
  bullet.style.top = `0px`; // Start from the top of the game container
  gameContainer.appendChild(bullet);

  moveBulletDownwards(bullet, timerController);
}

function removeEnemyBullet(){
  const enemyBulletList = document.querySelectorAll('.enemy-bullet');
  enemyBulletList.forEach(enemyBullet => enemyBullet.remove());
}

export { createEnemyBullet, removeEnemyBullet };