const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const mobMenu = document.querySelector('.has-fade');

btnHamburger.addEventListener('click', function() {

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        mobMenu.classList.remove('fade-in');
        mobMenu.classList.add('fade-out'); 
       } else {
        header.classList.add('open');
        mobMenu.classList.remove('fade-out');
        mobMenu.classList.add('fade-in'); 
    }
});