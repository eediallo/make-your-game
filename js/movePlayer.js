import { newPlayer } from "./config.js";
import { drawPlayer } from "./drawPlayer.js";

drawPlayer(); // Allow access to player element

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
}

function updatePlayerPosition() {
  player.style.transform = `translate(${posX}px, ${posY}px)`;
}

document.addEventListener("keydown", movePlayer);
