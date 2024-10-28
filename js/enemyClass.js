class enemy {
  constructor(width, height, x = 0, y = 0, color, line) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
}

const newEnemy = new enemy(50, 50);

function draw(container, enemyInstance) {
    const enemyContainer = document.querySelector('.enemy-container')
    container.classList.add("enemy");
    container.style.width = `${enemyInstance.width}px`;
    container.style.height = `${enemyInstance.height}px`;

    enemyContainer.append(container);
}

draw(document.createElement("div"), newEnemy);

console.log(newEnemy);