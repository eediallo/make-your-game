import { checkPlayerBulletCollision } from "./checkPlayerBulletCollision.js";

function moveBulletDownwards(bullet, timerController) {
  const containerRect = document.querySelector(".game-container").getBoundingClientRect();

  const bulletInterval = setInterval(() => {
    const bulletRect = bullet.getBoundingClientRect();

    if (bulletRect.bottom >= containerRect.bottom) {
      bullet.remove();
      clearInterval(bulletInterval);
    } else {
      bullet.style.top = `${parseFloat(bullet.style.top) + 5}px`; // Adjust speed as needed
    }

    checkPlayerBulletCollision(bullet, timerController);
  }, 20);
}

export { moveBulletDownwards };