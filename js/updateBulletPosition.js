import { newBullet } from "./createBullet.js";
import { newPlayer } from "./config.js";

function updateBulletPosition() {
  if (newBullet.activeBullet) {
    const bullet = document.querySelector(".bullet");
    if(bullet){
      bullet.style.transform = `translate(${newPlayer.x}px, ${newPlayer.y}px)`;
    }
  }
}

export { updateBulletPosition };
