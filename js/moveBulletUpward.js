import { newBullet } from "./createBullet.js";
import { isEnemyBulletCollision } from "./isEnemyBulletCollision.js";

// Move the bullet upwards until it reaches the top of the container
function moveBulletUpwards(bullet) {
  if (!bullet) return; // Ensure bullet is not null

  const containerRect = document
    .querySelector(".game-container")
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

    isEnemyBulletCollision(bullet);
  }, 20);
}

export { moveBulletUpwards };
