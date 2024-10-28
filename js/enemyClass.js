class Enemy{
    constructor(width, height, x=0, y=0) {
        this.width = width
        this.height = height
        this.x = x
        this.y = y
    }
}

const enemy = new Enemy(50, 50)

console.log(enemy)