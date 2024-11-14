import { startGame } from "./js/startGame.js";
const startGameBtn = document.querySelector("#start-game-btn");
startGameBtn.addEventListener("click", (btn) => {
  startGame(startGameBtn);
});
