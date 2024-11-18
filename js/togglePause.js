import { movePlayer } from "./movePlayer.js";
import { animate, stopAnimation } from "./animateGame.js";
import { gameTimeCounter } from "./updateGameTime.js";

function togglePause(pauseGameBtn, timerController) {
  pauseGameBtn.addEventListener("click", () => {
    if (!timerController.isPaused) {
      stopAnimation();
      clearInterval(timerController.intervalId);
      document.removeEventListener("keydown", movePlayer);
      timerController.isPaused = true;
      pauseGameBtn.textContent = "Continue";
    } else {
      animate();
      timerController.intervalId = setInterval(gameTimeCounter, 1000);
      document.addEventListener("keydown", movePlayer);
      timerController.isPaused = false;
      pauseGameBtn.textContent = "Pause";
    }
  });
}

export { togglePause };
