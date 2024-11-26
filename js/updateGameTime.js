import { formatUnit } from "./config.js";
import { handleGameOver } from "./handleGameOver.js";

const maxTime = 30;
let counter = 1;
let gameTimeIntervalId;
let timerController;

function gameTimeCounter() {
  if (timerController.isPaused) return; // Do not update the counter if the game is paused

  const gameTimeElement = document.querySelector("#game-time");
  if (!gameTimeElement) return; // ensure element exist
  gameTimeElement.textContent = `Time: ${formatUnit(counter)}`;
  counter++;
  if (counter >= maxTime) {
    clearInterval(gameTimeIntervalId);
    handleGameOver(timerController); // Call handleGameOver when time is up
  }
}

const resetCounter = () => counter = 0;

function setTimerController(controller) {
  timerController = controller;
}

export { gameTimeCounter, maxTime, counter, gameTimeIntervalId, resetCounter, setTimerController };