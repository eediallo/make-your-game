import { EnemyContainer } from "./enemyContainer.js";
import { Enemy } from "./enemyClass.js";
import { draw } from "./draw.js";

const enemyContainer = new EnemyContainer(1000, 400, "white", 2, "solid");
const enemyContainerElement = document.querySelector(".enemy-container");
enemyContainer.applyStyles(enemyContainerElement);

const enemies = [];

function createEnemies() {
  enemyContainerElement.innerHTML = ""; // Clear any existing enemies in the container
  const y = 0;
  const spacing = enemyContainer.width / 12; // Divide the width to create even horizontal spacing

  for (let i = 0; i < 11; i++) {
    const x = spacing * i; // Place each enemy with equal horizontal spacing
    const enemy = new Enemy(50, 50, x, y); // Create an enemy with fixed y and spaced x positions
    enemies.push(enemy);

    const enemyElement = document.createElement("div");
    draw(enemyElement, enemy, i); // Pass index to create a unique class for each enemy
  }
}

// Call createEnemies to generate and draw 11 enemies
createEnemies();

export { enemyContainer, enemyContainerElement, enemies, createEnemies };
