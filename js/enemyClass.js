export class Enemy{
    constructor(width, height, x=0, y=0) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.speed = 5
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
    update() {
        console.log(this.x, this.x+this.width)
        if (this.x + this.width >= 1000 || this.x < 0){
            this.y += 5
            this.speed *= -1;
            this.x += this.speed
        } else {
            this.x += this.speed;
            
        }
    }
}

