import { newPlayer } from "./config.js";
import { handleGameOver } from "./handleGameOver.js";

function handlePlayerHit(timerController) {
  newPlayer.lives -= 1;
  updateLivesDisplay();

  if (newPlayer.lives <= 0) {
    handleGameOver(timerController);
  }
}

function updateLivesDisplay() {
  const livesElement = document.querySelector("#lives");
  livesElement.textContent = `Lives: ${newPlayer.lives}`;
}

export { handlePlayerHit, updateLivesDisplay };