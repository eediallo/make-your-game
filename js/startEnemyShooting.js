import { createEnemyBullet } from "./createEnemyBullet.js";

let enemyShootingIntervalId;

function startEnemyShooting(timerController) {
  enemyShootingIntervalId = setInterval(() => createEnemyBullet(timerController), 1000); 
}

function stopEnemyShooting() {
  clearInterval(enemyShootingIntervalId);
}

export { startEnemyShooting, stopEnemyShooting };