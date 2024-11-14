import { enemyContainerElement } from "./config.js";
import { Enemy } from "./enemyClass.js";
import { drawEnemies } from "./drawEnemies.js";

const enemies = [];

function createEnemies() {
  enemyContainerElement.innerHTML = "";
  enemies.length = 0;

  const enemyWidth = 50;
  const enemyHeight = 50;
  const totalRows = 4;
  const totalEnemiesInRow = 11;
  const rowSpacing = 10; // Vertical space between rows

  let enemyId = 0; // Unique ID counter

  for (let row = 0; row < totalRows; row++) {
    const y = row * (enemyHeight + rowSpacing); // Calculate vertical position with spacing

    for (let i = 0; i < totalEnemiesInRow; i++) {
      const x = i * enemyWidth; // Calculate horizontal position without spacing
      const enemy = new Enemy(enemyWidth, enemyHeight, x, y, enemyId++);

      enemies.push(enemy);

      const enemyElement = document.createElement("div");
      enemyElement.classList.add(`enemy-${enemy.id}`);
      enemy.element = enemyElement; // Store the DOM element reference in the enemy object
      drawEnemies(enemyElement, enemy, row * totalEnemiesInRow + i);
      enemyContainerElement.appendChild(enemyElement); // Add the enemy to the container
    }
  }
}

export { enemies, createEnemies };
