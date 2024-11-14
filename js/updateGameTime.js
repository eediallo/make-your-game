import { formatUnit } from "./config.js";

const maxTime = 60;
let counter = 1;

export function gameTimeCounter() {
  let intervalId = setInterval(() => {
    const gameTimeElement = document.querySelector("#game-time");
    gameTimeElement.textContent = `Time: ${formatUnit(counter)}`;
    counter++;
  }, 1000);
  if (counter >= maxTime) {
    clearInterval(intervalId);
    alert("Game Over!");
  }
}
