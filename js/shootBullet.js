import { newBullet } from "./createBullet.js";
import { createBullet } from "./createBullet.js";

// Move the bullet upwards until it reaches the top of the container
function moveBulletUpwards(bullet) {
  const containerRect = document
    .querySelector(".enemy-container")
    .getBoundingClientRect();

  const bulletInterval = setInterval(() => {
    const bulletRect = bullet.getBoundingClientRect();

    // Stop bullet if it reaches the top of the container
    if (bulletRect.top <= containerRect.top) {
      bullet.remove();
      clearInterval(bulletInterval);
      newBullet.activeBullet = null; // Allow new bullets to be created
    } else {
      // Move the bullet up by bulletSpeed pixels
      bullet.style.top = `${
        parseFloat(bullet.style.top) - newBullet.bulletSpeed
      }px`;
    }
  }, 20);
}

function shootBullet() {
  document.addEventListener("keydown", (event) => {
    const bullet = document.querySelector(".bullet");
    if (event.key === " ") {
      createBullet();
      moveBulletUpwards(bullet);
    }
  });
}

export { shootBullet };
