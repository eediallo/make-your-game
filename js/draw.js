import { enemyContainerElement } from "./config.js";

function draw(container, enemyInstance, index) {
  container.classList.add(`enemy`, `enemy-${index}`);
  container.style.width = `${enemyInstance.width}px`;
  container.style.height = `${enemyInstance.height}px`;
  container.style.position = "absolute";
  container.style.left = `${enemyInstance.x}px`; // Set horizontal position
  container.style.top = `${enemyInstance.y}px`; // Set vertical position
  container.style.backgroundColor = enemyInstance.color;

  // Append the enemy to the enemy container
  enemyContainerElement.append(container);
}

export { draw };
