import { createBullet, newBullet } from "./createBullet.js";
import { moveBulletUpwards } from "./moveBulletUpward.js";
import { updateBulletPosition } from "./updateBulletPosition.js";

function shootBullet() {
  document.addEventListener("keydown", (event) => {
    if (event.key === " " && !newBullet.activeBullet) {
      const player = document.querySelector(".player");
      createBullet(player); // Create bullet if it doesn't exist
      const bullet = document.querySelector(".bullet");
      updateBulletPosition(); // Ensure bullet position is updated
      moveBulletUpwards(bullet);
    }
  });
}
export { shootBullet };
