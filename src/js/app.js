import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();


const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
const headerLink = document.querySelectorAll(".header__link");

let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
  menuOpened ? document.body.classList.add('o-hidden') : document.body.classList.remove('o-hidden')
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

headerLink.forEach(el => {
    el.addEventListener('click', e => {
        menuOpened ? menuToggle() : ''
    })
})
