let score = 0;
export function updateScore() {
  const scoreElement = document.querySelector("#score");
  score += 10;
  scoreElement.textContent = `Score: ${score}`;
}
