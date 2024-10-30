import { EnemyContainer } from "./enemyContainer.js";
import { Enemy } from "./enemyClass.js";
import { draw } from "./draw.js";

const enemyContainer = new EnemyContainer(1300, 600, "white", 2, "solid");
const enemyContainerElement = document.querySelector(".enemy-container");
enemyContainer.applyStyles(enemyContainerElement);

export { enemyContainer, enemyContainerElement };
