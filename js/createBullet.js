class Bullet {
  constructor(width, height, bulletSpeed) {
    this.width = width;
    this.height = height;
    this.bulletSpeed = bulletSpeed;
    this.activeBullet = null; // Track if there's a current active bullet
  }
}

const newBullet = new Bullet(5, 10, 20);

function shootBullet(playerElement) {
  // Check if there’s already an active bullet
  if (newBullet.activeBullet) return;

  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.width = `${newBullet.width}px`;
  bullet.style.height = `${newBullet.height}px`;
  bullet.style.position = "absolute";
  bullet.style.backgroundColor = "red";

  // Initially position the bullet relative to the player
  positionBullet(bullet, playerElement);

  document.querySelector(".enemy-container").appendChild(bullet);
  newBullet.activeBullet = bullet; // Track the bullet as "attached"
  moveBulletUpwards(bullet);
}

// Move the bullet upwards until it reaches the top of the container
function moveBulletUpwards(bullet) {
  const containerRect = document
    .querySelector(".enemy-container")
    .getBoundingClientRect();

  const bulletInterval = setInterval(() => {
    const bulletRect = bullet.getBoundingClientRect();

    // Stop bullet if it reaches the top of the container
    if (bulletRect.top <= containerRect.top) {
      bullet.remove(); // Remove the bullet when it goes out of bounds
      clearInterval(bulletInterval);
      newBullet.activeBullet = null; // Allow new bullets to be created
    } else {
      // Move the bullet up by bulletSpeed pixels
      bullet.style.top = `${
        parseFloat(bullet.style.top) - newBullet.bulletSpeed
      }px`;
    }
  }, 20);
}

// Position the bullet at the center top of the player
function positionBullet(bullet, playerElement) {
  const playerLeft =
    playerElement.offsetLeft +
    playerElement.offsetWidth / 2 -
    newBullet.width / 2;
  const playerTop = playerElement.offsetTop;
  bullet.style.left = `${playerLeft}px`;
  bullet.style.top = `${playerTop}px`;
}

export { shootBullet, newBullet };
