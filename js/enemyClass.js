export class Enemy{
    constructor(width, height, x=0, y=0) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.leftEdge = false;
        this.rightEdge = false;
        this.direction = ''
    }
    draw (container) {
        const enemy = document.createElement('div')
        enemy.className = 'enemy'
        enemy.style.width = `${this.width}px`;
        enemy.style.height = `${this.height}px`;
        enemy.style.left = `${this.x}px`;
        enemy.style.top = `${this.y}px`;
        container.appendChild(enemy)
    }
    update(gameSpeed) {
        if (this.direction == 'left') {
            gameSpeed *= -1
        }
        this.x += gameSpeed
        if (this.x + this.width >= 1000){
            this.direction = 'left'
            this.y += 5;
            
        } else if (this.x <= 0){
            this.direction = 'right'
            this.y += 5
            gameSpeed *= -1
            this.x += 2*gameSpeed
        }
        
        
        
        
    }
}

