const btnHamburger = document.querySelector('#btnHamburger');

btnHamburger.addEventListener('click', function(){
    console.log('open hamburger menu');

    if (btnHamburger.classList.contains('menu-open')) {
        btnHamburger.classList.remove('menu-open');
    } else {
        btnHamburger.classList.add('menu-open');
    }

});