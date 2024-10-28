export class Enemy{
    constructor(width, height, x=0, y=0) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y

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
    update(container) {
        this.x++
    }
}

