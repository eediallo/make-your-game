import { enemyElement } from "./config.js";
import { newEnemy } from "./config.js";
import { enemyContainer } from "./config.js";

//===============update======================
export function updateEnemyPosition() {
    if (newEnemy.direction === 'left') {
        newEnemy.x--;
    } else {
        newEnemy.x++;
    }

    if (newEnemy.x >= enemyContainer.width) {
        newEnemy.x = enemyContainer.width;
        newEnemy.direction = 'left';
    } else if (newEnemy.x <= 0) {
        newEnemy.x = 0;
        newEnemy.direction = 'right';
    }
    enemyElement.style.left = `${newEnemy.x}px`;
}