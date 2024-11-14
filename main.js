import { playStart } from "./js/playSounds.js";
import { startGame } from "./js/startGame.js";

document.addEventListener("DOMContentLoaded", playStart);
const startGameBtn = document.querySelector("#start-game-btn");
startGameBtn.addEventListener("click", () => {
  startGame(startGameBtn);
});
