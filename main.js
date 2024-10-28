import { draw } from "./js/draw.js";
import { updateEnemyPosition } from "./js/updateEnemyPosition.js";
import { enemyElement } from "./js/config.js";
import { newEnemy } from "./js/config.js";

draw(enemyElement, newEnemy);
updateEnemyPosition();
setInterval(updateEnemyPosition, 10);
