function twinkle() {
    document.writeln('Blinka lilla stjärna där <br>');
    document.writeln('Hur jag undrar var du är <br>');
    document.writeln('Fjärran låckar du min syn <br>');
    document.writeln('Lik en diamant i skyn <br>');
    document.writeln('<br>');
}

// twinkle();
// twinkle();

function square(num) {
    document.writeln(num * num);
    document.writeln('<br>');
}

square(1.5);
square('A'); //NaN = Not an Number

function area(height, width) {
    return height * width;
}

document.writeln('<br> The area is: ' + area(5, 10));

var result = area(5, 7);
document.writeln('<br>' + result);

function quadrupleMe(x) {
    return 4 * x;
}

var myNumber = quadrupleMe(9);

// Select an element
var btnNumber = document.getElementById('myNumber');

// Manipulate element
btnNumber.innerHTML = '<strong>ey´´</strong>' + myNumber;

// Funktion för första bokstaven stor
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = 'stockholm';
var capital = capitalize(city);

document.writeln('<br> Capital of Sweden if: ' + capital);

document.writeln('<br>');

function isEven(x) {
    if(x % 2 == 0){
        return true;
    } else{
        return false;
    }
}

var x = isEven(2);
document.writeln(x);

document.writeln('<br>');

function kebabToSnake(myString) {
    return myString.replaceAll('-', '_');
}

var myString = kebabToSnake('Hej-på-dig-mask');
document.writeln(myString);

document.writeln('<br>');

var p = document.getElementById('scopes'); // global scope

// declare
function localScope() {
    var localVar = 31;
    p.innerHTML = localVar;
}
// call
localScope();

document.writeln('<br>');

var globalVar = 'this is a global variable';
p.innerHTML = globalVar;
p.style.fontSize = '20px';
p.style.color = '#639';

function changeGlobalVar() {
    globalVar = 'new value';
    p.innerHTML = globalVar;
}
changeGlobalVar();

function tricky(){
    var globalVar = 'Am I a local variable?';
    p.innerHTML = globalVar;
}

tricky();
p.innerHTML = globalVar;

function myTimer() {
    var d = new Date();
    var clock = document.getElementById('clock');
    clock.innerHTML = d.toLocaleTimeString();
}
myTimer();

var seconds = setInterval(myTimer, 1000);
var btnStopTime = document.getElementsByClassName('stopTime')[0];
var doomsStr = document.getElementById('doomsMessage');

btnStopTime.addEventListener('click', function() {
    clearInterval(seconds);

    doomsStr.innerHTML = 'HA HA! Time is no more!'
    doomsStr.style.transition = 'all .4s ease';
    doomsStr.style.fontSize = '60px';
    doomsStr.style.color = 'crimson';
});