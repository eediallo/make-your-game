function createAndDisplayPausedMenu(){
      // Create and display the pause menu
      const pauseMenu = document.createElement('div');
      pauseMenu.id = 'pause-menu';
      pauseMenu.innerHTML = `
        <h1>Game Paused</h1>
        <p>Press 'C' to continue</p>
        <p>Press 'R' to reset</p>
      `;
      pauseMenu.style.position = 'absolute';
      pauseMenu.style.top = '50%';
      pauseMenu.style.left = '50%';
      pauseMenu.style.transform = 'translate(-50%, -50%)';
      pauseMenu.style.textAlign = 'center';
      pauseMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      pauseMenu.style.color = 'white';
      pauseMenu.style.padding = '20px';
      pauseMenu.style.borderRadius = '10px';
      document.body.appendChild(pauseMenu);
}

export {createAndDisplayPausedMenu}