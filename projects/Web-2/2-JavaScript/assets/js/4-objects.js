var person = ['Sid', 33, 'Male','WaterGate'];

person.shift();

document.writeln(person[2]);

document.writeln('<br> <br>');

// perfect use of an object
var user = {
    name: 'The kid', 
    age: 33, 
    city: 'MudGrove', 
    friends: ['Bob', 'Dylan'], 
    isEval: false, 
    shoutout: function() {
        alert('FOLLOW ME ON SOCIAL MEDIA!');
    }
};

document.writeln(`I am ${user.name} and I am ${user.age} years old and live in ${user.city}`);
user.shoutout();

document.writeln('<br> <br>');
