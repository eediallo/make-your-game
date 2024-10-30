export class Player {
  constructor(width, height, x, y, direction) {
    (this.width = width), (this.height = height), (this.x = x), (this.y = y);
    this.direction = "right";
  }
}
