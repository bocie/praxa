function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }