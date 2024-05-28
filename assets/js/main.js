document.addEventListener('DOMContentLoaded', function() {
  let scrollTimeout;
  let popupDisplayed = false;

  window.addEventListener('scroll', function() {
      if (!popupDisplayed) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(showPopup, 500); // Show popup after half second of scrolling
      }
  });

  function showPopup() {
      popupDisplayed = true;
      document.getElementById('popup').style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable further scrolling
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

 function toggleMenu() {
  const navUl = document.querySelector('.navul');
  if (navUl.style.display === 'block') {
      navUl.style.display = 'none';
  } else {
      navUl.style.display = 'block';
  }
}