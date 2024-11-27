import { enemies } from "./createEnemies.js";

export function hideEnemies() {
  enemies.forEach((_, index) => {
    const enemyElement = document.querySelector(`.enemy-${index}`);
    if (enemyElement) {
      enemyElement.style.display = "none";
    }
  });
}
