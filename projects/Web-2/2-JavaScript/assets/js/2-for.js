for(var i = 0; i <= 10; i++) {
    document.writeln('Count is: ' + i + '<br>');
}



// Increment by 2 or more
// count += 2 this is equal to count = count + 2
for(var count = 1; count < 13; count += 3) {
    document.writeln('Count is: ' + count + '<br>');
}

document.writeln('_____________________' + '<br>');

var str = 'Hello World!';
for ( var i = 0; i < str.length; i++) {
    document.writeln(str[i]);
}

document.writeln('<br>' + '_____________________' + '<br>');

var codeArr = ['CSS', 'HTML', 'JS', 17, true];
var len = codeArr.length;
for (var i = 0; i < len; i++) {
    document.writeln('Language: ' + codeArr[i] + '<br>');
}

document.writeln('<br>' + '_____________________' + '<br>');

for (var i = -9; i < 19; i++) {
    document.writeln(i + '<br>');
}

document.writeln('<br>' + '_____________________' + '<br>');

for (var i = 10; i < 41; i++) {
    if (i % 2 == 0) {
        document.writeln(i);
    }
}

document.writeln('<br>' + '_____________________' + '<br>');

for (var i = 300; i < 334; i++) {
    if (i % 2 != 0) {
        document.write(i + ' ');
    }
}

document.writeln('<br>' + '_____________________' + '<br>');

for (var i = 5; i < 51; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.write(i + ' ');
    }
}

document.writeln('<br>' + '_____________________' + '<br>');
/*
for (var i = 0; i <= 10; i++) {
    var multication = i * 9;
    document.writeln(i + '*' + 9 + '=' + multication + '<br>');
} */

// Nested for-loops
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (var i = 0; i <= 10; i++) {
    for (var j = 0; j <= 10; j++) {
        document.writeln(' ' + i * j + ' ')
    }
    document.writeln('<br>');
}