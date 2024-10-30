
import { updateEnemyPositions } from "./js/updateEnemyPosition.js";
import { createEnemies } from "./js/config.js";
import { enemies, enemyContainerElement } from "./js/config.js";

//Create 11 enemies and draw them initially
createEnemies();

// Continuously update the positions of all enemies
setInterval(updateEnemyPositions, 10);
