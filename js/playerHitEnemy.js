import { enemies } from "./createEnemies.js";

function isEnemyBulletCollision(bullet) {
  const bulletRect = bullet.getBoundingClientRect(); // Get the bullet's current position and size

  for (let enemy of enemies) {
    const enemyElement = enemy.element;
    const enemyRect = enemyElement.getBoundingClientRect(); // Get the enemy's current position and size

    // Check if the bullet and the enemy have collided
    if (
      bulletRect.left + bulletRect.width >= enemyRect.left &&
      bulletRect.left <= enemyRect.left + enemyRect.width &&
      bulletRect.top + bulletRect.height >= enemyRect.top &&
      bulletRect.top <= enemyRect.top + enemyRect.height
    ) {
     
      bullet.remove();
      enemyElement.remove(); // Remove enemy DOM element

      // Remove enemy from the enemies array
      const index = enemies.indexOf(enemy);
      if (index !== -1) {
        enemies.splice(index, 1); // Remove enemy from array
      }
      break; // Stop checking for further collisions once one is detected
    }
  }
}

export { isEnemyBulletCollision };
