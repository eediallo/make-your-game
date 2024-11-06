class Bullet {
  constructor(width, height, bulletSpeed, x, y) {
    this.width = width;
    this.height = height;
    this.bulletSpeed = bulletSpeed;
    this.activeBullet = null; // Track if there's a current active bullet
    this.x = x;
    this.y = y;
  }
}

const newBullet = new Bullet(20, 20, 20, 0, 0);

function createBullet(playerElement) {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.width = `${newBullet.width}px`;
  bullet.style.height = `${newBullet.height}px`;
  bullet.style.position = "absolute";
  bullet.style.backgroundColor = "red";

  document.querySelector(".enemy-container").appendChild(bullet);
}

export { createBullet, newBullet };
