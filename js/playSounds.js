const hitBullet = new Audio("../assets/sounds/hitBullet.wav");
const collision = new Audio("../assets/sounds/collision.mp3");

function playHitBulletSound() {
  hitBullet.play();
}

function playCollision() {
  collision.play();
}

export { playHitBulletSound, playCollision };
