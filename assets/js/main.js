document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showPopup, 4000); // Show popup after 4 seconds of page load
  
    let scrollTimeout;
    let popupDisplayed = false;
  
    function showPopup() {
      if (!popupDisplayed) {
        popupDisplayed = true;
        document.getElementById('popup').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Disable further scrolling
      }
    }
  
    document.getElementById('close-popup').addEventListener('click', closePopup);
    document.getElementById('popup-button').addEventListener('click', closePopup);
  
    function closePopup() {
      document.getElementById('popup').style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling again
    }
  });



function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  
}

function Hamburgermenu() {
    var x = document.getElementById("myTopnavig");
    if (x.className === "topnavig") {
      x.className += " responsive";
    } else {
      x.className = "topnavig";
    }
  }