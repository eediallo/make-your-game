class Enemy {
    constructor(game, column, row) {
        this.game = game;
        this.markedForDeletion = false;
        this.width = 64;
        this.height = 64;
        this.column = column;
        this.row = row;
        this.x = this.column * (this.width + 10);
        this.y = this.row * (this.height + 10) + this.game.row;
        this.frame = 0;
        this.frameTimer = 0;
        this.frameInterval = 200;
    }
    update(deltaTime) {
        this.x += this.game.speed
        this.y = this.row * (this.height + 10) + this.game.row
        if (this.frameTimer > this.frameInterval){
            this.frame = this.frame==0? 1:0;
            this.frameTimer = 0
        } else this.frameTimer += deltaTime
        

    }
    draw(container) {
        const enemy = document.createElement("div");
        enemy.className = "enemy1";
        enemy.style.width = `${this.width}px`;
        enemy.style.height = `${this.height}px`;
        enemy.style.left = `${this.x}px`;
        enemy.style.top = `${this.y}px`;
        enemy.style.background = `url(${this.image})`;
        enemy.style.backgroundPositionX = `${this.frame * 64}px`
        container.appendChild(enemy);
    }
}

export class Enemy1 extends Enemy {
    constructor(game, column, row) {
        super(game, column, row);
        this.image = "./assets/SpriteSheet1.png";
    }
}

export class Enemy2 extends Enemy {
    constructor(game, column, row) {
        super(game, column, row);
        this.image = "./assets/SpriteSheet2.png";
    }
}

export class Enemy3 extends Enemy {
    constructor(game, column, row) {
        super(game, column, row);
        this.image = "./assets/SpriteSheet3.png";
    }
}
