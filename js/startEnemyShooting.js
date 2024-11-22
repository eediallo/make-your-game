import { createEnemyBullet } from "./createEnemyBullet.js";

let enemyShootingIntervalId;

function startEnemyShooting() {
  enemyShootingIntervalId = setInterval(createEnemyBullet, 1000); 
}

function stopEnemyShooting() {
  clearInterval(enemyShootingIntervalId);
}

export { startEnemyShooting, stopEnemyShooting };