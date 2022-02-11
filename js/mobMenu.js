const mobileMenuHandle = document.querySelector('.mobile-menu');

mobileMenuHandle.addEventListener('click', function() {
  const menu = document.querySelector('.navigation-list');
  menu.classList.toggle('mobile-menu-shown');
});

let mobileMenuFooter = document.querySelector('.mobile-menu-footer');

mobileMenuFooter.addEventListener('click', function() {
  let menuFooter = document.querySelector('.navigation-list-footer');
  menuFooter.classList.toggle('mobile-menu-footer-shown');
});