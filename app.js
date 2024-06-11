const hamBurger = document.querySelector('.hamburger');
const hamMenu = document.querySelector('.offscreen-menu');

hamBurger.addEventListener('click', () => {
    hamBurger.classList.toggle('active');
    hamMenu.classList.toggle('active');
})