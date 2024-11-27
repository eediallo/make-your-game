import { animate, stopAnimation } from "./animateGame.js";
import { gameTimeCounter } from "./updateGameTime.js";
import { resetGame } from "./resetGame.js";
import { startEnemyShooting, stopEnemyShooting } from "./startEnemyShooting.js";
import { createAndDisplayPausedMenu, removePauseMenu } from "./createAndDisplayPausedMenu.js";
import { removeEnemyBullet } from "./createEnemyBullet.js";
import { addMovePlayerAndShootBulletEvents, RemoveMovePlayerAndShootBulletEvents } from "./addAndRemoveEvents.js";

function togglePause(timerController) {
  document.addEventListener("keydown", (event) => {
    if ((event.key === "p" || event.key === "P" ) && !timerController.isPaused) {
      stopAnimation();
      stopEnemyShooting();
      clearInterval(timerController.intervalId);
      removeEnemyBullet()
      createAndDisplayPausedMenu()
      RemoveMovePlayerAndShootBulletEvents()
      timerController.isPaused = true;
    } else if ((event.key === "c" || event.key === "C") && timerController.isPaused) {
      animate();
      startEnemyShooting(timerController);
      timerController.intervalId = setInterval(gameTimeCounter, 1000);
      addMovePlayerAndShootBulletEvents()
      timerController.isPaused = false;

    removePauseMenu()
    } else if (event.key === "r" || event.key === "R") {
      // Re-initialize the timerController
      const newTimerController = {
        intervalId: setInterval(gameTimeCounter, 1000),
        isPaused: false,
      };
      resetGame(newTimerController);
       // Update the timerController reference
       timerController.intervalId = newTimerController.intervalId;
       timerController.isPaused = newTimerController.isPaused;
 
     removePauseMenu()
    }
  });
}
export { togglePause };