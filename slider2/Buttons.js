const botonMenu = document.querySelector(".button__1");
const botonCerrar = document.querySelector(".botoncerrar");
const menu = document.querySelector(".menudesplegable");

botonMenu.addEventListener("click", function() {
  menu.classList.toggle("mostrar");
});

botonCerrar.addEventListener("click", function() {
  menu.classList.remove("mostrar");
});

const boton2Menu = document.querySelector(".button__2");
const boton2Cerrar = document.querySelector(".botoncerrar2");
const menu2 = document.querySelector(".menudesplegable2");

boton2Menu.addEventListener("click", function() {
  menu2.classList.toggle("mostrar");
});

boton2Cerrar.addEventListener("click", function() {
  menu2.classList.remove("mostrar");
});


