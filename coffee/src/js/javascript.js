window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header__menu__list"),
        menu_item = document.querySelectorAll(".header__menu__item"),
        hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger_active")
        menu.classList.toggle("header__menu__list_active")
        
    });
    
});