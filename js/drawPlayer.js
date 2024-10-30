import { newPlayer } from "./config.js";
import { enemyContainerElement } from "./config.js";

function drawPlayer() {
  const playerElement = document.createElement("div");
  playerElement.classList.add("player");
  playerElement.style.width = `${newPlayer.width}px`;
  playerElement.style.height = `${newPlayer.height}px`;
  playerElement.style.position = "absolute"; // Ensure the player is positioned absolutely
  playerElement.style.left = `${newPlayer.x}px`; // Set the initial x position
  playerElement.style.top = `${newPlayer.y}px`; // Set the initial y position

  enemyContainerElement.append(playerElement);
  return playerElement;
}

console.log(drawPlayer());
export { drawPlayer };
