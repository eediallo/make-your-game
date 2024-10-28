class enemy {
  constructor(width, height, x = 0, y = 0, color, line) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }
}

const enemyContainerElement = document.querySelector(".enemy-container");

class EnemyContainer {
    constructor(width, height, color, line, lineWidth) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.line = line;
        this.lineWidth = lineWidth;
    }

    applyStyles(container) {
        container.style.width = `${this.width}px`;
        container.style.height = `${this.height}px`;
        container.style.border = `${this.line}px ${this.lineWidth} ${this.color}`;
    }
}



const enemyContainer = new EnemyContainer(1000, 400, 'white', 2, 'solid');
enemyContainer.applyStyles(enemyContainerElement);
const newEnemy = new enemy(50, 50, 15, 15);

//============draw================================================
function draw(container, enemyInstance) {
  container.classList.add("enemy");
  container.style.width = `${enemyInstance.width}px`;
  container.style.height = `${enemyInstance.height}px`;
  container.style.position = "absolute";
  container.style.left = `${enemyInstance.x}px`;
  container.style.top = `${enemyInstance.y}px`;

  enemyContainerElement.append(container);
}

const enemyElement = document.createElement("div");
draw(enemyElement, newEnemy);

//===============update======================
function update() {
  newEnemy.x++;
  enemyElement.style.left = `${newEnemy.x}px`;
  if (newEnemy.x >= enemyContainer.width) {
    newEnemy.x = 0;
  }
}

//==========Set interval==========
setInterval(update, 10);

// call update
update();
