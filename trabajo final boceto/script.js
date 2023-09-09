
function validateForm() {
    const nombreInput = document.getElementById("nombre");
    const conocimientosInput = document.getElementById("conocimientos");
    const gmailInput = document.getElementById("gmail");
  
    if (nombreInput.value.trim() === "") {
      alert("Por favor, ingresa tu nombre.");
      return false;
    }
  
    if (conocimientosInput.value.trim() === "") {
      alert("Por favor, ingresa tus conocimientos.");
      return false;
    }
  
    if (gmailInput.value.trim() === "") {
      alert("Por favor, ingresa tu correo Gmail.");
      return false;
    }
  
    return true;
  }
  function showGameDetails(title, details) {
    const gameTitleElement = document.getElementById("game-title");
    const gameDetailsElement = document.getElementById("game-details");
  
    gameTitleElement.textContent = title;
    gameDetailsElement.textContent = details;
  }
  

  const checkboxes = document.querySelectorAll('.rating input');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updateRating);
  });


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".bars__menu").addEventListener("click", animateBars);
  
    var line1__bars = document.querySelector(".line1__bars-menu");
    var line2__bars = document.querySelector(".line2__bars-menu");
    var line3__bars = document.querySelector(".line3__bars-menu");
    var line4__bars = document.querySelector(".menu");
    
    function animateBars(){
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
        line4__bars.classList.toggle("activemenu");

        
    }
  });
   
  

  
  const ball = document.querySelector('.ball');
  const playerPaddle = document.getElementById('playerPaddle');
  const computerPaddle = document.getElementById('computerPaddle');
  const playerScoreDisplay = document.getElementById('playerScore');
  const computerScoreDisplay = document.getElementById('computerScore');
  const playerLivesDisplay = document.getElementById('playerLives');
  
  let ballX = 300;
  let ballY = 200;
  let ballSpeedX = 5;
  let ballSpeedY = 5;
  
  let playerPaddleY = 160;
  let computerPaddleY = 160;
  const paddleSpeed = 5;
  
  let playerScore = 0;
  let computerScore = 0;
  let playerLives = 3;
  
  function gameLoop() {
      movePaddles();
      moveBall();
      checkCollision();
      checkGameOver();
      updateDisplay();
  
      requestAnimationFrame(gameLoop);
  }
  
  
  function movePaddles() {
     
      if (playerPaddleY >= 0 && playerPaddleY <= 320) {
          if (keyIsDown('ArrowUp')) {
              playerPaddleY -= paddleSpeed;
          }
          if (keyIsDown('ArrowDown')) {
              playerPaddleY += paddleSpeed;
          }
      }
  
     
      const computerPaddleCenter = computerPaddleY + 40;
      if (ballY > computerPaddleCenter) {
          computerPaddleY += paddleSpeed;
      } else {
          computerPaddleY -= paddleSpeed;
      }
  }
  
  
  function moveBall() {
      ballX += ballSpeedX;
      ballY += ballSpeedY;
  }
  
  // Check collision with paddles and walls
  function checkCollision() {
      // Check collision with player paddle
      if (
          ballX < 25 &&
          ballY > playerPaddleY &&
          ballY < playerPaddleY + 80
      ) {
          ballSpeedX = -ballSpeedX;
          // Increase player's score
          playerScore++;
      }
  
      // Check collision with computer paddle
      if (
          ballX > 575 &&
          ballY > computerPaddleY &&
          ballY < computerPaddleY + 80
      ) {
          ballSpeedX = -ballSpeedX;
          // Increase computer's score
          computerScore++;
      }
  
      // Check collision with top and bottom walls
      if (ballY < 0 || ballY > 360) {
          ballSpeedY = -ballSpeedY;
      }
  }
  
  
  // Check game over
  function checkGameOver() {
      if (ballX < 0) {
          // Player loses a life
          playerLives--;
          if (playerLives === 0) {
              // Game over
              gameOver();
          } else {
              // Reset ball position
              ballX = 300;
              ballY = 200;
              ballSpeedX = 5;
              ballSpeedY = 5;
          }
      }
  
      if (ballX > 600) {
          // Computer loses a life
          computerLives--;
          if (computerLives === 0) {
              // Game over
              gameOver();
          } else {
              // Reset ball position
              ballX = 300;
              ballY = 200;
              ballSpeedX = 5;
              ballSpeedY = 5;
          }
      }
  }
  
  // Update display
  function updateDisplay() {
      ball.style.left = ballX + 'px';
      ball.style.top = ballY + 'px';
  
      playerPaddle.style.top = playerPaddleY + 'px';
      computerPaddle.style.top = computerPaddleY + 'px';
  
      playerScoreDisplay.textContent = playerScore;
      computerScoreDisplay.textContent = computerScore;
      playerLivesDisplay.textContent = playerLives;
  }
  
  // Game over
  function gameOver() {
      // Display game over message
      alert('Game Over!');
  
      // Reset the game
      playerScore = 0;
      computerScore = 0;
      playerLives = 3;
      ballX = 300;
      ballY = 200;
      ballSpeedX = 5;
      ballSpeedY = 5;
  }
  
  // Helper function to check if a key is pressed
  function keyIsDown(key) {
      return !!keyState[key];
  }
  
  // Key event listeners
  const keyState = {};
  
  document.addEventListener('keydown', (event) => {
      keyState[event.key] = true;
  });
  
  document.addEventListener('keyup', (event) => {
      keyState[event.key] = false;
  });
  
  // Start the game loop
  gameLoop();
  




