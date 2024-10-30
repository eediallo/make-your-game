import { EnemyContainer } from "./enemyContainer.js";
import { Player } from "./playerClass.js";

const enemyContainer = new EnemyContainer(1300, 600, "white", 2, "solid");
const enemyContainerElement = document.querySelector(".enemy-container");
enemyContainer.applyStyles(enemyContainerElement);
const newPlayer = new Player(100, 100, 0, 0);

export { enemyContainer, enemyContainerElement, newPlayer };
