import { EnemyContainer } from "./enemyContainer.js";
import { Player } from "./playerClass.js";

const enemyContainer = new EnemyContainer(1200, 600, "white", 2, "solid");
const enemyContainerElement = document.querySelector(".enemy-container");
enemyContainer.applyStyles(enemyContainerElement);
const newPlayer = new Player(100, 100, 50, 0);

function formatUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

export { enemyContainer, enemyContainerElement, newPlayer, formatUnit };
