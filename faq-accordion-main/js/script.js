document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.querySelectorAll(".toggleButton");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      let targetId = this.getAttribute("data-target");
      let targetDropdown = document.getElementById(targetId);
      targetDropdown.classList.toggle("hide");

      // Cambiar la imagen del botón
      let img = this.querySelector(".buttonImage");
      if (targetDropdown.classList.contains("hide")) {
        img.src = "./assets/images/icon-plus.svg"; // Imagen cuando el dropdown está oculto
      } else {
        img.src = "./assets/images/icon-minus.svg"; // Imagen cuando el dropdown está visible
      }
    });
  });
});
