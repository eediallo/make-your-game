class enemy {
  constructor(width, height, x = 0, y = 0, color, line) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
}

const newEnemy = new enemy(50, 50, 15, 15);

function draw(container, enemyInstance) {
  const enemyContainer = document.querySelector(".enemy-container");
  container.classList.add("enemy");
  container.style.width = `${enemyInstance.width}px`;
  container.style.height = `${enemyInstance.height}px`;
  container.style.position = "absolute";
  container.style.left = `${enemyInstance.x}px`;
  container.style.top = `${enemyInstance.y}px`;

  enemyContainer.append(container);
}

const enemyElement = document.createElement("div");
draw(enemyElement, newEnemy);

function update() {
  newEnemy.x++;
  enemyElement.style.left = `${newEnemy.x}px`;
}

setInterval(update, 10);

update();

console.log(newEnemy);
