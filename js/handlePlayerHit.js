import { newPlayer } from "./config.js";
import { handleGameOver } from "./animateGame.js";

function handlePlayerHit() {
  newPlayer.lives -= 1;
  updateLivesDisplay();

  if (newPlayer.lives <= 0) {
    handleGameOver();
  }
}

function updateLivesDisplay() {
  const livesElement = document.querySelector("#lives");
  livesElement.textContent = `Lives: ${newPlayer.lives}`;
}

export { handlePlayerHit, updateLivesDisplay };