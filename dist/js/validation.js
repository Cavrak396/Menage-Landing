//Universal clicked element
let footer_button = document.querySelector(
  ".footer__transmission-button"
);
let form = document.querySelector(".footer__bottom-transmission");
let footer_input = document.querySelector(
  ".footer__transmission-input"
);
let invalid_red = "invalid";

footer_button.addEventListener("click", () => {
  //Values of form
  let footer_input = document.querySelector(
    ".footer__transmission-input"
  );
  let fi_value = footer_input.value;

  //Check for @ and .

  if (fi_value.includes("@") && fi_value.includes(".")) {
    let positionA = fi_value.indexOf("@");
    let positionDot = fi_value.indexOf(".");
    let betweenADot = fi_value.substring(positionA + 1, positionDot);

    //Check for words between and .
    if (betweenADot.length > 0) {
      //Check for words before @
      let beforeA = fi_value.substring(0, positionA);

      if (beforeA.length > 2) {
        let afterDot = fi_value.substring(positionDot + 1, fi_value.length);

        //Check the words after @
        let afterA = fi_value.substring(positionA + 1, positionDot);

        if (afterA.length > 1) {
          if (afterDot.length > 1) {
          } else {
            footer_input.classList.toggle(invalid_red);
            form.innerHTML += `<p class="footer__bottom-post-problem">
            Please insert a valid email</p>`;
          }
        } else {
          footer_input.classList.toggle(invalid_red);
          form.innerHTML += `<p class="footer__bottom-post-problem">
    Please insert a valid email</p>`;
        }
      }
    } else {
      footer_input.classList.toggle(invalid_red);
      form.innerHTML += `<p class="footer__bottom-post-problem">
    Please insert a valid email</p>`;
    }
  } else {
    footer_input.classList.toggle(invalid_red);
    form.innerHTML += `<p class="footer__bottom-post-problem">
    Please insert a valid email</p>`;
  }
});
