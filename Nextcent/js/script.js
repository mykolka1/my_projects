"use strict"

//

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const menuLinks = document.querySelectorAll(".menu__link");

document.querySelector(".header__burger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".header__menu").classList.toggle("open");
})

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("open")) {
            burger.classList.remove("active");
            menu.classList.remove("open");
        }
    });
});

// 

const input = document.getElementById("cleanInput");

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        this.value = "";
        event.preventDefault();
    }
})

//

// document.querySelectorAll('.card__link').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         const moreText = this.previousElementSibling.querySelector('.card__textmore');
//         if (moreText.style.display === 'none' || !moreText.style.display) {
//             moreText.style.display = 'inline';
//             this.textContent = 'Read Less';
//         } else {
//             moreText.style.display = 'none';
//             this.textContent = 'Read More'
//             this.blur()
//         }
//     });
// });

document.querySelectorAll('.card__link').forEach(button => {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        const hiddenText = card.querySelector('.card__textmore');

        hiddenText.classList.toggle('open');

        if (hiddenText.classList.contains('open')) {
            button.textContent = 'Show less';
        } else {
            button.textContent = 'Show more';
        }
    });
});