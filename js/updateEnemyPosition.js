import { enemies } from "./createEnemies.js";
import { enemyContainerElement } from "./config.js";

let globalDirection = "right";

export function updateEnemyPositions() {
  // ----Determine the boundaries of the group of enemies----------
  let leftmostX = Infinity;
  let rightmostX = -Infinity;

  enemies.forEach((enemy) => {
    if (enemy.x < leftmostX) leftmostX = enemy.x;
    if (enemy.x + enemy.width > rightmostX) rightmostX = enemy.x + enemy.width;
  });

  //----------Check if we need to move the entire block down and switch direction-------
  if (
    rightmostX >= enemyContainerElement.clientWidth &&
    globalDirection === "right"
  ) {
    globalDirection = "left";
    enemies.forEach((enemy) => {
      enemy.y += 4; // Move entire group down by 4px
    });
  } else if (leftmostX <= 0 && globalDirection === "left") {
    globalDirection = "right";
    enemies.forEach((enemy) => {
      enemy.y += 4; // Move entire group down by 4px
    });
  }

  // ----Move each enemy horizontally in the global direction-----------
  enemies.forEach((enemy, index) => {
    enemy.x += globalDirection === "right" ? 1 : -1;

    //----Update the enemy element’s position in the DOM----------------
    const enemyElement = document.querySelector(`.enemy-${index}`);
    if (enemyElement) {
      enemyElement.style.transform = `translate(${enemy.x}px, ${enemy.y}px)`;
    }
  });
}
