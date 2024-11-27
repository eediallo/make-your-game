import { enemyContainerElement } from "./config.js";

function drawEnemies(container, enemyInstance, index) {
  container.classList.add(`enemy`, `enemy-${index}`);
  container.style.width = `${enemyInstance.width}px`;
  container.style.height = `${enemyInstance.height}px`;
  container.style.position = "absolute";
  container.style.transform = `translate(${enemyInstance.x}px, 0)`; // Set horizontal position
  container.style.transform = `translate(0, ${enemyInstance.y}px)`; // Set vertical position
  container.style.backgroundColor = enemyInstance.color;

  // Append the enemy to the enemy container
  enemyContainerElement.append(container);
}

export { drawEnemies };
