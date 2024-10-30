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

export { EnemyContainer };
