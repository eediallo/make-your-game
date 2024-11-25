import { movePlayer } from "./movePlayer.js";
import { animate, stopAnimation } from "./animateGame.js";
import { gameTimeCounter } from "./updateGameTime.js";
import { shootBullet } from "./shootBullet.js";
import { resetGame } from "./resetGame.js";
import { startEnemyShooting, stopEnemyShooting } from "./startEnemyShooting.js";

function togglePause(timerController) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "p" && !timerController.isPaused) {
      stopAnimation();
      stopEnemyShooting()
      //============================================================
      const enemyBulletLIst = document.querySelectorAll('.enemy-bullet')
      enemyBulletLIst.forEach(enemyBullet => enemyBullet.remove())
      //============================================================
      document.removeEventListener("keydown", movePlayer);
      document.removeEventListener("keydown", shootBullet);
      timerController.isPaused = true;
    } else if (event.key === "c" && timerController.isPaused) {
      animate();
      startEnemyShooting()
      timerController.intervalId = setInterval(gameTimeCounter, 1000);
      document.addEventListener("keydown", movePlayer);
      document.addEventListener("keydown", shootBullet);
      timerController.isPaused = false;
    } else if (event.key === "r") {
      resetGame(timerController);
    }
  });
}

export { togglePause };