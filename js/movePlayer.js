import { newPlayer } from "./config.js";
import { drawPlayer } from "./drawPlayer.js";

drawPlayer(); // allow access to player element

const player = document.querySelector(".player");
let posX = newPlayer.x;
let posY = newPlayer.y;
const step = 10;

function movePlayer(event) {
  if (event.key === "ArrowLeft") {
    posX -= step;
  }

  if (event.key === "ArrowRight") {
    posX += step;
  }

  player.style.transform = `translate(${posX}px, ${posY}px)`;
}

document.addEventListener("keydown", movePlayer);
