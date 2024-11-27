
export class Enemy {
  constructor(width, height, x, y, id) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.id = id; // Unique ID
    this.element = null; // Store reference to DOM element
  }
}

