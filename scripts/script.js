window.addEventListener('DOMContentLoaded', () => {
    const hamburger_menu = document.querySelector('.hamburger-menu');
    const nav_menu = document.querySelector('.header__nav');

    hamburger_menu.addEventListener('click', () => {
        hamburger_menu.classList.toggle('hamburger-menu_active');
        nav_menu.classList.toggle('header__nav_active');
    })
})