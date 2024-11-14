import { newBullet } from "./createBullet.js";
import { enemies } from "./createEnemies.js";

// Move the bullet upwards until it reaches the top of the container
function moveBulletUpwards(bullet) {
  if (!bullet) return; // Ensure bullet is not null

  const containerRect = document
    .querySelector(".enemy-container")
    .getBoundingClientRect();

  const bulletInterval = setInterval(() => {
    const bulletRect = bullet.getBoundingClientRect();

    if (bulletRect.top <= containerRect.top) {
      bullet.remove();
      clearInterval(bulletInterval);
      newBullet.activeBullet = null;
    } else {
      // Move the bullet up by bulletSpeed pixels
      bullet.style.top = `${
        parseFloat(bullet.style.top) - newBullet.bulletSpeed
      }px`;
    }

    for (let enemy of enemies) {
      const enemyElement = enemy.element;
      const enemyRect = enemyElement.getBoundingClientRect();
    
      // Check for collision
      if (
        bulletRect.left + bulletRect.width >= enemyRect.left &&
        bulletRect.left <= enemyRect.left + enemyRect.width &&
        bulletRect.top + bulletRect.height >= enemyRect.top &&
        bulletRect.top <= enemyRect.top + enemyRect.height
      ) {
        // Remove the bullet and enemy upon collision
        bullet.remove();
        enemyElement.remove(); // Remove enemy DOM element
    
        // Remove enemy from the enemies array
        const index = enemies.indexOf(enemy);
        if (index !== -1) {
          enemies.splice(index, 1); // Remove enemy from array
        }
        break; // Stop checking for more collisions
      }
    }

  }, 20);
}

export { moveBulletUpwards };
