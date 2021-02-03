var person = ['Sid', 33, 'Male', 'EagleShieldBay'];
 
person.shift();
// document.writeln(person[2])
 
var personFriends = ['Bob', 'Dylan', 'Aiizee', 'Deezee'];
 
// Perfect use case of an object
var user = {
    name: 'The kid',
    city: 'HereSneezedDuck',
    age: 33,
    friends: ['Bob', 'Dylan', 'Aiizee', 'Deezee'],
    isEvil: false,
    shoutout: function() {
        alert(`Shoutout to y'all!`);
    }, 
    ageing: function() {
        return this.age++;
    }
};
 
var btnAger = document.querySelector(".ager");
btnAger.addEventListener(`click`, function() {
    firstOutput.innerHTML = `<br>My name is ${user.name} and I am ${user.ageing()} and I live in ${user.city}`;
});

var firstOutput = document.getElementById("userInfo");
// user.shoutout();
 
for(var i = 0; i < user.friends.length; i++) {
    console.log(user.friends[i]);
}
 
// use forEach if array
user.friends.forEach(function(friend) {
    console.log(friend)
})
 
// console.log(user.age)
// user.age++;
// console.log(user.age)

var posts = [
    {
        author: "Maja",
        comment: "Hej på dig"
    },
    {
        author: "Bert",
        comment: "Neh"
    },
    {
        author: "Lars",
        comment: "Calm down"
    }
]

// html Reff
var postOutput = document.querySelector(".posts");

posts.forEach(function(post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented ${post.comment} <br><br><br>`;
});

var input = document.querySelector(".updateCity");
var city = document.querySelector(".city")
input.addEventListener("keydown", function(e) {
    if(e.key === 'Enter') {
        city.innerHTML = input.value;
        document.body.style.backgroundColor = 'red';
        document.body.style.transform += 'rotateX(4deg)';
        document.body.style.transform += 'rotateY(4deg)';
    }
});

var toggle = document.querySelector(".btnToggle");
toggle.addEventListener('click', function() {
    // classList.add
    // classList.remove
    city.classList.toggle("changeText");
});

var movies = [
    {
        movie: "Tron",
        raiting: "4/5",
        watched: "Yes"
    },
    {
        movie: "Vaiana",
        raiting: "8/10",
        watched: "Yes"
    },
    {
        movie: "Frozen",
        raiting: "3/4",
        watched: "Yes"
    }
]

var movieList = document.querySelector(".movieDB");
movies.forEach(function(movie) {
    movieList.innerHTML += `${movie.movie} `;
})