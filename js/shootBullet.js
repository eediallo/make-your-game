import { createBullet } from "./createBullet.js";
import { moveBulletUpwards } from "./moveBulletUpward.js";

function shootBullet() {
  document.addEventListener("keydown", (event) => {
    const bullet = document.querySelector(".bullet");
    if (event.key === " ") {
      createBullet();
      moveBulletUpwards(bullet);
    }
  });
}

export { shootBullet };
