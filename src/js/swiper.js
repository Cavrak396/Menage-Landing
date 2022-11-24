//Slider variables and constantes
const quotes__box = document.querySelector(".quotes__box");

let pressed = false;
let startX = 0;
let quote = document.querySelectorAll(".quotes__box-developer");

//Functions

quotes__box.addEventListener("mousedown", function (quote) {
  pressed = true;
  startX = quote.clientX;
  this.style.cursor = "grabbing";
});

quotes__box.addEventListener("mouseleave", function (quote) {
  pressed = false;
});

window.addEventListener("mouseup", function (quote) {
  pressed = false;
  quotes__box.style.cursor = "grab";
});

quotes__box.addEventListener("mousemove", function (quote) {
  if (!pressed) {
    return;
  }

  this.scrollLeft += startX - quote.clientX;
});
