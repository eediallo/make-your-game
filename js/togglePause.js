import { animate, stopAnimation } from "./animateGame.js";
import { gameTimeCounter } from "./updateGameTime.js";
import { shootBullet } from "./shootBullet.js";
import { resetGame } from "./resetGame.js";
import { startEnemyShooting, stopEnemyShooting } from "./startEnemyShooting.js";
import { createAndDisplayPausedMenu, removePauseMenu } from "./createAndDisplayPausedMenu.js";
import { movePlayer } from "./movePlayer.js";

function togglePause(timerController) {
  document.addEventListener("keydown", (event) => {
    if ((event.key === "p" || event.key === "P" ) && !timerController.isPaused) {
      stopAnimation();
      stopEnemyShooting();
      clearInterval(timerController.intervalId);

      //===============remove enemy bullet ==================
      const enemyBulletList = document.querySelectorAll('.enemy-bullet');
      enemyBulletList.forEach(enemyBullet => enemyBullet.remove());
      //================================================================
      document.removeEventListener("keydown", movePlayer);
      document.removeEventListener("keydown", shootBullet);
      createAndDisplayPausedMenu()
      timerController.isPaused = true;
  
    } else if ((event.key === "c" || event.key === "C") && timerController.isPaused) {
      animate();
      startEnemyShooting(timerController);
      timerController.intervalId = setInterval(gameTimeCounter, 1000);
      document.addEventListener("keydown", movePlayer);
      document.addEventListener("keydown", shootBullet);
      timerController.isPaused = false;

    removePauseMenu()
    } else if (event.key === "r" || event.key === "R") {
      // Re-initialize the timerController
      const newTimerController = {
        intervalId: setInterval(gameTimeCounter, 1000),
        isPaused: false,
      };
      resetGame(newTimerController);

     removePauseMenu()
    }
  });
}


export { togglePause };