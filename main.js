import {startGame} from './js/startGame.js'

const startGameBtn = document.querySelector("#start-game-btn");
startGameBtn.addEventListener("click", () => {
  startGame(startGameBtn);
});


// Show instructions on game load
const instructions = document.getElementById('instructions');
const closeInstructionsBtn = document.getElementById('close-instructions-btn');

// Show instructions when the game loads
window.addEventListener('load', () => {
  instructions.classList.remove('hidden');
});

// Hide instructions when 'Close Instructions' button is clicked
closeInstructionsBtn.addEventListener('click', () => {
  instructions.classList.add('hidden');
});
