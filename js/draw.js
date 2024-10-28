
const enemyContainerElement = document.querySelector(".enemy-container");

function draw(container, enemyInstance) {
    container.classList.add("enemy");
    container.style.width = `${enemyInstance.width}px`;
    container.style.height = `${enemyInstance.height}px`;
    container.style.position = "absolute";
    container.style.left = `${enemyInstance.x}px`;
    container.style.top = `${enemyInstance.y}px`;
  
    enemyContainerElement.append(container);
  }
  
  export {
    draw
  }