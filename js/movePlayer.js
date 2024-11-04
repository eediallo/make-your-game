import { newPlayer } from "./config.js";
import { drawPlayer } from "./drawPlayer.js";

drawPlayer(); // allow access to player element

const player = document.querySelector(".player");
const playerContainer = document.querySelector(".enemy-container");
let posX = newPlayer.x;
let posY = newPlayer.y;
const step = 10;

function movePlayer(event) {
  const playerRect = player.getBoundingClientRect();
  const playerContainerRect = playerContainer.getBoundingClientRect();
  if (
    event.key === "ArrowLeft" &&
    playerRect.left - step >= playerContainerRect.left
  ) {
    posX -= step;
  }

  if (
    event.key === "ArrowRight" &&
    playerRect.right + step <= playerContainerRect.right
  ) {
    posX += step;
  }

  player.style.transform = `translate(${posX}px, ${posY}px)`;
}

document.addEventListener("keydown", movePlayer);
