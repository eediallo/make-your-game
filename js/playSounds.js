const hitBullet = new Audio("../assets/sounds/hitBullet.wav");
const collision = new Audio("../assets/sounds/collision.mp3");
const start = new Audio("../assets/sounds/start.mp3");
function playHitBulletSound() {
  hitBullet.play();
}

function playCollision() {
  collision.play();
}

function playStart() {
  start.play();
}

function stopStart() {
  start.stop();
}

export { playHitBulletSound, playCollision, playStart, stopStart };
