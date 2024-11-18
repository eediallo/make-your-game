import { startGame } from "./js/startGame.js";
import { togglePause } from "./js/togglePause.js";

const startGameBtn = document.querySelector("#start-game-btn");
startGameBtn.addEventListener("click", () => {
  startGame(startGameBtn);
});
