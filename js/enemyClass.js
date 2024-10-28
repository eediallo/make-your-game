class enemy {
  constructor(width, height, x = 0, y = 0) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
}

const newEnemy = new enemy(23, 59);

function draw(container, enemyInstance) {
    const bodyElement = document.body
    container.classList.add("enemy-container");
    container.style.width = `${enemyInstance.width}px`;
    container.style.height = `${enemyInstance.height}px`;

    bodyElement.append(container);
}

draw(document.createElement("div"), newEnemy);

console.log(newEnemy);
