import { Enemy } from "./js/enemyClass.js";
let enemies = [];
let enemiesPerRow = 11;
let gameSpeed = 1;
let rowHeight = 0;
let enemySize = 50
for (let i = 0; i < enemiesPerRow; i++){
    enemies.push(new Enemy(enemySize, enemySize, i*enemySize + i*10));
}
const container = document.getElementById('container')
let direction = 'right'
setInterval(function(){
    container.innerHTML = ''
    enemies.forEach(enemy => {
        enemy.direction = direction
        enemy.y = rowHeight
        enemy.draw(container)
        
        enemy.update(gameSpeed)
        direction = enemy.direction
        rowHeight = enemy.y
    })
},10)
    
