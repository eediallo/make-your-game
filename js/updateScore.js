let score = 0;
function updateScore() {
  const scoreElement = document.querySelector("#score");
  score += 10;
  scoreElement.textContent = `Score: ${score}`;
}

function resetScore(){
  score = 0
}

export {updateScore, resetScore}
