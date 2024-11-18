import { formatUnit } from "./config.js";

const maxTime = 30;
let counter = 1;
let intervalId;

function gameTimeCounter() {
  const gameTimeElement = document.querySelector("#game-time");
  if (!gameTimeElement) return; // ensure element exist
  gameTimeElement.textContent = `Time: ${formatUnit(counter)}`;
  counter++;

  if (counter >= maxTime) {
    clearInterval(intervalId);
  }
}

export { gameTimeCounter, maxTime, counter };
