// select
var hamburger = document.querySelector('.mobileIcon');
var menuClose = document.querySelector('.mobileIconClose');
var menu = document.querySelector('.mobileMenu');

// img select
var lamp = document.querySelectorAll('.lamp');
var dice = document.querySelectorAll('.dice');

// manipulate
hamburger.addEventListener('click', function() {
    menu.classList.toggle('mebileMenuToggle')
});

menuClose.addEventListener('click', function() {
    menu.classList.toggle('mebileMenuToggle')
});

// img manipulate
for(i = 0; i < lamp.length; i++) {
    lamp[i].addEventListener('click', function() {
        this.classList.toggle('focusing');
    });
}
for(i = 0; i < dice.length; i++) {
    dice[i].addEventListener('click', function() {
        this.classList.toggle('focusing');
    });
}