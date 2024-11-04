import { Enemy } from "./js/enemyClass.js";
let enemies = [];
let enemiesPerRow = 11;
let gameSpeed = 1;
let rowHeight = 0
let enemySize = 64
for (let i = 0; i < enemiesPerRow; i++){
    enemies.push(new Enemy(enemySize, enemySize, i*(enemySize +10), 1));
    enemies.push(new Enemy(enemySize, enemySize, i*(enemySize +10), enemySize + 10, 2));
    enemies.push(new Enemy(enemySize, enemySize, i*(enemySize +10), 2 *(enemySize + 10), 3));
    enemies.push(new Enemy(enemySize, enemySize, i*(enemySize +10), 3 *(enemySize + 10), 4));
    enemies.push(new Enemy(enemySize, enemySize, i*(enemySize +10), 4 *(enemySize + 10), 5));
}
const container = document.getElementById('container')
let direction = 'right'
setInterval(function(){
    container.innerHTML = ''
    enemies.forEach(enemy => {
        enemy.direction = direction
        enemy.y = rowHeight + (enemy.row * enemySize)
        enemy.draw(container)
        
        enemy.update(gameSpeed)
        direction = enemy.direction
        // rowHeight = enemy.y 
    })
},10)
    
