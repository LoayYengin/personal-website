const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function () {
    console.log('open hamburger menu');

    if (header.classList.contains('menu-open')) { // close hamburger
        header.classList.remove('menu-open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
    } else { // open hamburger
        header.classList.add('menu-open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }

});