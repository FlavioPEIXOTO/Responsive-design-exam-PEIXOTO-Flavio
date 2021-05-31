var burgerMenu = document.querySelector('.burger__menu');
var headerMenu = document.querySelector(".header__menu");
var headerOverlay = document.querySelector('.menu__overlay');
var body = document.querySelector('body');

function toggleBurgerMenu() {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    headerOverlay.classList.toggle('active');
    body.classList.toggle('stop-scroll');
}