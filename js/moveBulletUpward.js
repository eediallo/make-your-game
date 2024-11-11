import { newBullet } from "./createBullet.js";

// Move the bullet upwards until it reaches the top of the container
function moveBulletUpwards(bullet) {
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
  }, 20);
}

export { moveBulletUpwards };
