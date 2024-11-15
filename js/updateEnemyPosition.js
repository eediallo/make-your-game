import { enemies } from "./createEnemies.js";
import { enemyContainerElement } from "./config.js";

let globalDirection = "right";
let moveDown = 7;
let horizontalSpeed = 3;

function updateEnemyPositions() {
  //Determine the boundaries of the group of enemies
  let leftmostX = Infinity;
  let rightmostX = -Infinity;

  // Filter out any enemies that no longer have a corresponding DOM element
  const activeEnemies = enemies.filter((enemy) => {
    return document.body.contains(enemy.element); // Check if the enemy element still exists in the DOM
  });

  activeEnemies.forEach((enemy) => {
    if (enemy.x < leftmostX) leftmostX = enemy.x;
    if (enemy.x + enemy.width > rightmostX) rightmostX = enemy.x + enemy.width;
  });

  //Check if we need to move the entire block down and switch direction
  if (
    rightmostX >= enemyContainerElement.clientWidth &&
    globalDirection === "right"
  ) {
    globalDirection = "left";
    activeEnemies.forEach((enemy) => {
      enemy.y += moveDown; 
    });
  } else if (leftmostX <= 0 && globalDirection === "left") {
    globalDirection = "right";
    activeEnemies.forEach((enemy) => {
      enemy.y += moveDown;
    });
  }

  //Move each enemy horizontally in the global direction
  activeEnemies.forEach((enemy) => {
    enemy.x += globalDirection === "right" ? horizontalSpeed : -horizontalSpeed;

    //Update the enemy element’s position in the DOM
    const enemyElement = enemy.element;
    if (enemyElement) {
      enemyElement.style.transform = `translate(${enemy.x}px, ${enemy.y}px)`;
    }
  });
}

export { updateEnemyPositions };
