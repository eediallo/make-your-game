import { startGame } from "./js/startGame.js";
import {  togglePause } from "./js/togglePause.js";

const startGameBtn = document.querySelector("#start-game-btn");
startGameBtn.addEventListener("click", () => {
  startGame(startGameBtn);
});

const timerController = {
  intervalId: null,
  isPaused: false,
};

const pauseBtn = document.querySelector(".pause-btn");
togglePause(pauseBtn, timerController);