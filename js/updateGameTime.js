import { handleGameOver } from "./handleGameOver.js";

const maxTime = 30;
let counter = 1;
let timerController;

function gameTimeCounter() {
  if (timerController.isPaused) return; // Do not update the counter if the game is paused
  counter++;
  const gameTimeElement = document.querySelector("#game-time");
  gameTimeElement.textContent = `Time: ${counter}`;

  if (counter >= maxTime) {
    clearInterval(timerController.intervalId);
    handleGameOver(timerController); // Call handleGameOver when time is up
  }
}

const resetCounter = () => {
  counter = 0;
  const gameTimeElement = document.querySelector("#game-time");
  gameTimeElement.textContent = `Time: 00`;
};

function setTimerController(controller) {
  timerController = controller;
}

export { gameTimeCounter, maxTime, counter, resetCounter, setTimerController };