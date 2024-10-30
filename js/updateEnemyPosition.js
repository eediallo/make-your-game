import { enemies } from "./createEnemies.js";
import { enemyContainer } from "./config.js";

export function updateEnemyPositions() {
  enemies.forEach((enemy, index) => {
    // Move enemy horizontally
    if (enemy.direction === "left") {
      enemy.x--;
    } else {
      enemy.x++;
    }

    // Check if enemy reaches the right edge
    if (enemy.x >= enemyContainer.width - enemy.width) {
      enemy.x = enemyContainer.width - enemy.width;
      enemy.direction = "left";
      enemy.y += 10;
    } else if (enemy.x <= 0) {
      enemy.x = 0;
      enemy.direction = "right";
      enemy.y += 10;
    }

    // Update the enemy element’s position in the DOM
    const enemyElement = document.querySelector(`.enemy-${index}`);
    if (enemyElement) {
      enemyElement.style.left = `${enemy.x}px`;
      enemyElement.style.top = `${enemy.y}px`; // Update vertical position
    }
  });
}
