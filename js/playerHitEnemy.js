import { newBullet } from "./createBullet.js";
import { enemies } from "./createEnemies.js";

function playerEnemyCollision(bullet) {
  for (let enemy of enemies) {
    console.log(enemy);
    if (
      bullet.x + bullet.width >= enemy.x &&
      bullet.x <= enemy.x + enemy.width &&
      bullet.y + bullet.height >= enemy.y &&
      bullet.y <= enemy.y + enemy.height
    ) {
      return true;
    }
  }

  return false;
}

console.log(playerEnemyCollision(newBullet));

export { playerEnemyCollision };
