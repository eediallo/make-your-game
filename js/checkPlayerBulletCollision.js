import { handlePlayerHit } from "./handlePlayerHit.js";

function checkPlayerBulletCollision(bullet) {
  const player = document.querySelector(".player");
  const playerRect = player.getBoundingClientRect();
  const bulletRect = bullet.getBoundingClientRect();

  if (
    bulletRect.left < playerRect.right &&
    bulletRect.right > playerRect.left &&
    bulletRect.top < playerRect.bottom &&
    bulletRect.bottom > playerRect.top
  ) {
    bullet.remove();
    handlePlayerHit();
  }
}

export { checkPlayerBulletCollision };