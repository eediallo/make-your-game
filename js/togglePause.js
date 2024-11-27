import { animate, stopAnimation } from "./animateGame.js";
import { gameTimeCounter } from "./updateGameTime.js";
import { shootBullet } from "./shootBullet.js";
import { resetGame } from "./resetGame.js";
import { startEnemyShooting, stopEnemyShooting } from "./startEnemyShooting.js";
import { createAndDisplayPausedMenu, removePauseMenu } from "./createAndDisplayPausedMenu.js";
import { movePlayer } from "./movePlayer.js";
import { removeEnemyBullet } from "./createEnemyBullet.js";

function togglePause(timerController) {
  document.addEventListener("keydown", (event) => {
    if ((event.key === "p" || event.key === "P" ) && !timerController.isPaused) {
      stopAnimation();
      stopEnemyShooting();
      clearInterval(timerController.intervalId);
      removeEnemyBullet()
      createAndDisplayPausedMenu()
      removeEventListers()
      timerController.isPaused = true;
    } else if ((event.key === "c" || event.key === "C") && timerController.isPaused) {
      animate();
      startEnemyShooting(timerController);
      timerController.intervalId = setInterval(gameTimeCounter, 1000);
      addEventListener()
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

function removeEventListers(){
  document.removeEventListener("keydown", movePlayer);
  document.removeEventListener("keydown", shootBullet);
}

function addEventListener(){
  document.addEventListener("keydown", movePlayer);
  document.addEventListener("keydown", shootBullet);
}


export { togglePause };