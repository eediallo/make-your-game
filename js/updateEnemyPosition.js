import { enemies } from "./config.js";
import { enemyContainer } from "./config.js";

export function updateEnemyPositions() {
  enemies.forEach((enemy, index) => {
    if (enemy.direction === "left") {
      enemy.x--;
    } else {
      enemy.x++;
    }

    // Reverse direction if an enemy hits container bounds
    if (enemy.x >= enemyContainer.width - enemy.width) {
      enemy.x = enemyContainer.width - enemy.width;
      enemy.direction = "left";
    } else if (enemy.x <= 0) {
      enemy.x = 0;
      enemy.direction = "right";
    }

    // Update the enemy element’s position in the DOM
    const enemyElement = document.querySelector(`.enemy-${index}`);
    enemyElement.style.left = `${enemy.x}px`;
  });
}

