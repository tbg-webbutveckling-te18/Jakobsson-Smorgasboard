// Greater then
var age = 17;
if (age >= 18) {
    console.log('Du får ta körkortet.')
} else {
    console.log('Du får inte ta körkortet.')
}

// If somthing is equal too
var lesson = 'Web development';
if (lesson == 'History') {
    console.log('We have: ' + lesson);
} else if (lesson == 'Web development') {
    console.log('We have: ' + lesson)
} else {
    console.log('Spare time')
}

var isSunny = false;
if(isSunny == true) {
    console.log('Put on some shorts today.')
} else {
    console.log('Put on some warm clothes today.');
}

//step 1
var d = new Date();
if(d.getHours() <= 18){
    console.log('Good day');
} else if(d.getHours() >= 18){
    console.log('Good evening');
}

//step 2
if(d.getHours() < 10) {
    console.log('Good morning')
} else if (d.getHours() < 18) {
    console.log('Good day');
} else {
    console.log('Good evenong');
}

//step 3
if(d.getHours() < 10) {
    if(d.getMonth() > 9 || d.getMonth < 2) {
        console.log('Go ahead and sleep like a bear');
    } else {
        console.log('Good morning');
    }
} else if (d.getHours() < 18) {
    console.log('Good day');
} else {
    console.log('Good evenong');
}