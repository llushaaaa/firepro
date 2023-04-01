const menu = document.getElementById('menu');
const menuOpenBtn = document.getElementById('menu-open-btn');
const menuCloseBtn = menu.querySelector('.menu-content__close');

menuOpenBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

menuCloseBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});