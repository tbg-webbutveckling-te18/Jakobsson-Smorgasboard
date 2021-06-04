// variabler
var btnLeft = document.querySelector('.scrollLeft');
var btnRight = document.querySelector('.scrollRight');

var scroller = document.querySelector('.cardParrent');

var scrollCountInt = 0;
var scrollCountStr = scrollCountInt.toString() + 'px';

// events
btnLeft.addEventListener('click', function(){
    if (scrollCountInt <= -1200) {
        scrollCountInt = 750;
    }
    
    scrollCountInt -= 75;
    scrollCountStr = scrollCountInt.toString() + 'px';

    scroller.style.marginLeft = scrollCountStr;
    console.log(scrollCountInt);
});

btnRight.addEventListener('click', function(){
    if (scrollCountInt >= 750) {
        scrollCountInt = -1200;
    }

    scrollCountInt += 75;
    scrollCountStr = scrollCountInt.toString() + 'px';

    scroller.style.marginLeft = scrollCountStr;
    console.log(scrollCountInt);
});