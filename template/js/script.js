"use strict"

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".menu__link");

document.querySelector(".header__burger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".header__menu").classList.toggle("open")
})

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("open")) {
            burger.classList.remove("active");
            menu.classList.remove("open");
        }
    });
});