import { newPlayer } from "./config.js";
import { updateBulletPosition } from "./updateBulletPosition.js";
function movePlayer(event) {
  const player = document.querySelector(".player");
  const playerContainer = document.querySelector(".game-container");
  const step = 30;
  if(player){
    const playerRect = player.getBoundingClientRect();
    const playerContainerRect = playerContainer.getBoundingClientRect();

    // Move left
  if (
    event.key === "ArrowLeft" &&
    playerRect.left - step >= playerContainerRect.left
  ) {
    newPlayer.x -= step;
    updatePlayerPosition();
  }

  // Move right
  if (
    event.key === "ArrowRight" &&
    playerRect.right + step <= playerContainerRect.right
  ) {
    newPlayer.x += step;
    updatePlayerPosition();
  }
  }
}

function updatePlayerPosition() {
  const player = document.querySelector(".player");
  player.style.transform = `translate(${newPlayer.x}px, ${newPlayer.y}px)`;
  // update bullet position
  updateBulletPosition();
}

export { movePlayer };
