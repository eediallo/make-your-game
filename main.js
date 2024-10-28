import { Enemy } from "./js/enemyClass.js";

const enemy = new Enemy(50, 50)

for (let i=0; i<50; i++) {
    enemy.draw(document.getElementById('container'))
    enemy.update(document.getElementById('container'))
}
