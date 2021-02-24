// select
var hamburger = document.querySelector('.mobileIcon');
var menuClose = document.querySelector('.mobileIconClose');
var menu = document.querySelector('.mobileMenu');

// manipulate
hamburger.addEventListener('click', function() {
    menu.classList.toggle('mebileMenuToggle')
});

menuClose.addEventListener('click', function() {
    menu.classList.toggle('mebileMenuToggle')
});