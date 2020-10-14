function twinkle() {
    document.writeln('Blinka lilla stjärna där <br>');
    document.writeln('Hur jag undrar var du är <br>');
    document.writeln('Fjärran låckar du min syn <br>');
    document.writeln('Lik en diamant i skyn <br>');
    document.writeln('<br>');
}

twinkle();
twinkle();

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
