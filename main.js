import {Enemy } from "./js/enemyClass.js";
import { draw } from "./js/draw.js";
import { EnemyContainer } from "./js/enemyContainer.js";

const enemyContainer = new EnemyContainer(1000, 400, "white", 2, "solid");
const enemyContainerElement = document.querySelector(".enemy-container");
enemyContainer.applyStyles(enemyContainerElement);
const enemyElement = document.createElement("div");

const newEnemy = new Enemy(50, 50, 15, 15);
draw(enemyElement, newEnemy);


//===============update======================
function update() {
  newEnemy.x++;
  enemyElement.style.left = `${newEnemy.x}px`;
  if (newEnemy.x >= enemyContainer.width) {
    newEnemy.x = 0;
  }
}

//==========Set interval==========
setInterval(update, 10);

//call update
update();
