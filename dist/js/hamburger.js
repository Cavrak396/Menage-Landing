//Hamburger menu

let hamburger = document.querySelector('.header__hamburger');
let navigation = document.querySelector('.header__navigation-list');
let active = 'active';

hamburger.addEventListener('click', () => {
navigation.classList.toggle(active);
hamburger.classList.toggle(active);
});