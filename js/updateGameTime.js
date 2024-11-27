const maxTime = 30;
let counter = 1;
let gameTimeIntervalId;
let timerController;

function gameTimeCounter() {
  if (timerController.isPaused) return; // Do not update the counter if the game is paused
  counter++;
  const gameTimeElement = document.querySelector("#game-time");
  gameTimeElement.textContent = `Time: ${counter}`;
}

const resetCounter = () => {
  counter = 0;
  const gameTimeElement = document.querySelector("#game-time");
  gameTimeElement.textContent = `Time: 00`;
};

function setTimerController(controller) {
  timerController = controller;
}

export { gameTimeCounter, maxTime, counter, gameTimeIntervalId, resetCounter, setTimerController };