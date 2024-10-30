class Enemy {
  constructor(
    width,
    height,
    x = 0,
    y = 0,
    color = "black",
    direction = "right"
  ) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color;
    this.direction = direction; // Track movement direction
  }
}
export { Enemy };
