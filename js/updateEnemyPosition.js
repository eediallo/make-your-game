import { enemyElement } from "./config.js";
import { newEnemy } from "./config.js";
import { enemyContainer } from "./config.js";

//===============update======================
export function updateEnemyPosition() {
    newEnemy.x++;
    enemyElement.style.left = `${newEnemy.x}px`;
    if (newEnemy.x >= enemyContainer.width) {
      newEnemy.x = 0;
    }
  }