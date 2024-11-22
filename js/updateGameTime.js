import { formatUnit } from "./config.js";

const maxTime = 30;
let counter = 1;
let gameTimeIntervalId;

function gameTimeCounter() {
  const gameTimeElement = document.querySelector("#game-time");
  if (!gameTimeElement) return; // ensure element exist
  gameTimeElement.textContent = `Time: ${formatUnit(counter)}`;
  counter++;

  if (counter >= maxTime) {
    clearInterval(gameTimeIntervalId);
  }
}

export { gameTimeCounter, maxTime, counter, gameTimeIntervalId };
