
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
   
  

  