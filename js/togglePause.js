import { movePlayer } from "./movePlayer.js";
import { animate, stopAnimation } from "./animateGame.js";
import { gameTimeCounter } from "./updateGameTime.js";
import { shootBullet } from "./shootBullet.js";
import { resetGame } from "./resetGame.js";

function togglePause(pauseGameBtn, timerController) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "p" && !timerController.isPaused) {
      stopAnimation();
      clearInterval(timerController.intervalId);
      document.removeEventListener("keydown", movePlayer);
      document.removeEventListener("keydown", shootBullet);
      timerController.isPaused = true;
      pauseGameBtn.textContent = "Continue";
    } else if (event.key === "c" && timerController.isPaused) {
      animate();
      timerController.intervalId = setInterval(gameTimeCounter, 1000);
      document.addEventListener("keydown", movePlayer);
      document.addEventListener("keydown", shootBullet);
      timerController.isPaused = false;
      pauseGameBtn.textContent = "Pause";
    } else if (event.key === "r") {
      resetGame(timerController);
    }
  });
}

export { togglePause };