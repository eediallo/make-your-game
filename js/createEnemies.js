import { enemyContainerElement } from "./config.js";
import { Enemy } from "./enemyClass.js";
import { draw } from "./draw.js";
import { enemyContainer } from "./config.js";

const enemies = [];

function createEnemies() {
  enemyContainerElement.innerHTML = ""; 
  let y = 0;
  const spacing = enemyContainer.width / 12; // Divide the width to create even horizontal spacing

  for (let i = 0; i < 11; i++) {
    const x = spacing * i; // Place each enemy with equal horizontal spacing
    const enemy = new Enemy(50, 50, x, y);
    enemies.push(enemy);

    const enemyElement = document.createElement("div");
    draw(enemyElement, enemy, i); // i creates a unique class for each enemy
  }
}

export { enemies, createEnemies };
