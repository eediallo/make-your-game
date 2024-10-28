import { EnemyContainer } from "./enemyContainer.js";
import { Enemy } from "./enemyClass.js";

const enemyContainer = new EnemyContainer(1000, 400, "white", 2, "solid");
const enemyContainerElement = document.querySelector(".enemy-container");
enemyContainer.applyStyles(enemyContainerElement);
const enemyElement = document.createElement("div");

const newEnemy = new Enemy(50, 50, 15, 15);


export {
    enemyContainer,
    enemyContainerElement,
    enemyElement,
    newEnemy,
}