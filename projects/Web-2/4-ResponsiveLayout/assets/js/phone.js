// select
var hamburger = document.querySelector('.mobileIcon');
var menuClose = document.querySelector('.mobileIconClose');
var menu = document.querySelector('.mobileMenu');

var lamp = document.querySelectorAll('.lamp');

// manipulate
hamburger.addEventListener('click', function() {
    menu.classList.toggle('mebileMenuToggle')
});

menuClose.addEventListener('click', function() {
    menu.classList.toggle('mebileMenuToggle')
});

for(i = 0; i < lamp.length; i++) {
    lamp[i].addEventListener('click', function() {
        this.classList.toggle('focusing');
    });
}