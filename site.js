const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.site-header nav');
menuButton?.addEventListener('click', () => { const open = navigation.classList.toggle('mobile-open'); menuButton.setAttribute('aria-expanded', String(open)); });
