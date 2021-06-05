// const btnHamburger = document.querySelector('#btnHamburger');
// const body = document.querySelector('body');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const fadeElements = document.querySelectorAll('.has-fade');
//
// btnHamburger.addEventListener('click', function () {
//     console.log('open hamburger menu');
//
//     if (header.classList.contains('menu-open')) { // close hamburger
//         body.classList.remove('no-scroll');
//         header.classList.remove('menu-open');
//         fadeElements.forEach(function(element) {
//             element.classList.remove('fade-in');
//             element.classList.add('fade-out');
//         });
//     } else { // open hamburger
//         body.classList.add('no-scroll');
//         header.classList.add('menu-open');
//         fadeElements.forEach(function(element) {
//             element.classList.add('fade-in');
//             element.classList.remove('fade-out');
//         });
//     }
//
// });

/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
    document.getElementById("home-content").style.overflow = "hidden";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}