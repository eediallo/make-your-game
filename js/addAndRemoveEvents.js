import { movePlayer } from "./movePlayer.js";
import { shootBullet } from "./shootBullet.js";

function RemoveMovePlayerAndShootBulletEvents(){
    document.removeEventListener("keydown", movePlayer);
    document.removeEventListener("keydown", shootBullet);
  }
  
  function addMovePlayerAndShootBulletEvents(){
    document.addEventListener("keydown", movePlayer);
    document.addEventListener("keydown", shootBullet);
  }

  
  export {RemoveMovePlayerAndShootBulletEvents, addMovePlayerAndShootBulletEvents}