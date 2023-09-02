function animateAndRedirect() {
    const logo = document.querySelector(".logo");
    
    
    logo.style.animation = "Scale 0.2s linear";
  
  
    setTimeout(() => {
      window.location.href = "pagina_principal.html";
    }, 2000);
  }
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
  
  function updateRating() {
    const checkedBoxes = document.querySelectorAll('.rating input:checked');
    const rating = checkedBoxes.length;
    console.log(`Rating: ${rating}`);
    
    if (rating === 0) {
      // No se seleccionaron estrellas, puedes realizar acciones adicionales aquí si es necesario
      return;
    }
  
    // Reiniciar los checkboxes si se hace clic en una estrella ya seleccionada
    if (this.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox !== this) {
          checkbox.checked = false;
        }
      });
    }
  }

  
