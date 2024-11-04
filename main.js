import { Enemy1, Enemy2, Enemy3 } from "./js/enemyClass.js";
window.addEventListener("load", function () {
    let gameHeight = 600;
    let gameWidth = 1000;
    const container = document.getElementById("container");
    container.style.height = `${gameHeight}px`;
    container.style.width = `${gameWidth}px`;

    class Game {
        constructor(width, height) {
            (this.width = width),
                (this.height = height),
                (this.speed = 5),
                (this.row = 0),
                (this.maxRow = 4),
                (this.enemies = []);
        }
        update(deltaTime) {
            this.enemies.forEach((enemy, i) => {
                enemy.update(deltaTime);
                if (
                    enemy.x >= this.width - enemy.width &&
                    enemy.row == this.maxRow
                ) {
                    this.speed *= -1;

                    this.row += 5;
                }
                // if (enemy.column == 10) enemy.x -= 2*this.speed
                console.log(
                    i,
                    enemy.game.speed,
                    enemy.x,
                    enemy.x + enemy.width
                );
                if (enemy.x <= 0) {
                    enemy.x -= 2 * this.speed;
                    this.speed *= -1;
                    this.row += 5;
                }
            });
        }
        draw(context) {
            this.enemies.forEach((enemy) => {
                enemy.draw(context);
            });
        }
        makeEnemies() {
            for (let i = 0; i < 11; i++) {
                this.enemies.push(new Enemy1(this, i, 0));
                this.enemies.push(new Enemy2(this, i, 1));
                this.enemies.push(new Enemy2(this, i, 2));
                this.enemies.push(new Enemy3(this, i, 3));
                this.enemies.push(new Enemy3(this, i, 4));
            }
        }
    }

    const game = new Game(gameWidth, gameHeight);
    let lastTime = 0;
    game.makeEnemies();
    let count = 0;
    function animate(timeStamp) {
        container.innerHTML = "";
        count++;
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.draw(container);
        game.update(deltaTime);
        // if (count < 100) {
        requestAnimationFrame(animate);
        // }
    }
    
    animate(0);
});
