import { newPlayer } from "./config.js";

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

const newBullet = new Bullet(10, 10, 20, 0, 0);

function createBullet(event) {
  if (newBullet.activeBullet) return; // Prevent creating multiple bullets

  const player = document.querySelector(".player");
  const playerLeft =
    player.offsetLeft + player.offsetWidth / 2 - newBullet.width / 2;
  const playerTop = player.offsetTop;
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.width = `${newBullet.width}px`;
  bullet.style.height = `${newBullet.height}px`;
  bullet.style.position = "absolute";
  bullet.style.backgroundColor = "red";
  bullet.style.left = `${playerLeft}px`;
  bullet.style.top = `${playerTop}px`;
  document.querySelector(".enemy-container").appendChild(bullet);
  newBullet.activeBullet = bullet; // Track the active bullet
}

function updateBulletPosition() {
  const bullet = document.querySelector(".bullet");
  bullet.style.transform = `translate(${newPlayer.x}px, ${newPlayer.y}px)`;
}

export { createBullet, newBullet, updateBulletPosition };
