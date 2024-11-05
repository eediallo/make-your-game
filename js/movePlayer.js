import { newPlayer } from "./config.js";
import { drawPlayer } from "./drawPlayer.js";
import { shootBullet, newBullet } from "./createBullet.js";

drawPlayer(); // allow access to player element

const player = document.querySelector(".player");
const playerContainer = document.querySelector(".enemy-container");
let posX = newPlayer.x;
let posY = newPlayer.y;
const step = 10;

function movePlayer(event) {
  const playerRect = player.getBoundingClientRect();
  const playerContainerRect = playerContainer.getBoundingClientRect();

  // Move left
  if (
    event.key === "ArrowLeft" &&
    playerRect.left - step >= playerContainerRect.left
  ) {
    posX -= step;
    updatePlayerPosition();
  }

  // Move right
  if (
    event.key === "ArrowRight" &&
    playerRect.right + step <= playerContainerRect.right
  ) {
    posX += step;
    updatePlayerPosition();
  }

  // Shoot bullet when space bar is pressed
  if (event.key === " ") {
    shootBullet(player);
  }
}

// Update player's position and the attached bullet (if any)
function updatePlayerPosition() {
  player.style.transform = `translate(${posX}px, ${posY}px)`;

  // Update the attached bullet’s position if it exists
  if (newBullet.attachedBullet) {
    positionBullet(newBullet.attachedBullet, player);
  }
}

document.addEventListener("keydown", movePlayer);
