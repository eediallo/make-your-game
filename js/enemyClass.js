

class enemy {
    constructor(width, height, x = 0, y = 0){
        this.width = width
        this.height = height
        this.x = x
        this.y = y
    }
}


const newEnemy = new enemy(23, 59)


console.log(newEnemy)