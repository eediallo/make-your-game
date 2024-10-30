import { enemyContainerElement } from "./config.js";

function draw(container, enemyInstance, index) {
  container.classList.add(`enemy`, `enemy-${index}`);
  container.style.width = `${enemyInstance.width}px`;
  container.style.height = `${enemyInstance.height}px`;
  container.style.position = "absolute";
  container.style.left = `${enemyInstance.x}px`;
  container.style.top = `${enemyInstance.y}px`;
  container.style.backgroundColor = enemyInstance.color; // Optional color styling

  enemyContainerElement.append(container);
}

export { draw };
