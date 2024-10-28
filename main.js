import { Enemy } from "./js/enemyClass.js";

const enemy = new Enemy(50, 50)
const container = document.getElementById('container')

setInterval(function(){
    container.innerHTML = ''
    enemy.draw(container)
    enemy.update()
},10)
    
