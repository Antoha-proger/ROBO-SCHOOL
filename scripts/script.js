"use strict"

import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    }

});

window.addEventListener('DOMContentLoaded', () => {
    const hamburger_menu = document.querySelector('.hamburger-menu');
    const nav_menu = document.querySelector('.header__nav');
    const body = document.querySelector('body');

    hamburger_menu.addEventListener('click', () => {
        hamburger_menu.classList.toggle('hamburger-menu_active');
        nav_menu.classList.toggle('header__nav_active');
        body.classList.toggle('body_active');
    })
})