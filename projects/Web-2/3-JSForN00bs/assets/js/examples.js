/* Selektioner */
var number = 11;
if(number <= 10) {
    // Den kod som är här körs
} else if(number == 10) {
    /* Om det åvan inte stämmer men detta
    gör så körs den här biten av kod */
} else {
    /* Om inget annat stämmer 
    så körs den här koden */
}


var letter = 'B';
switch(letter) {
    case 'A':
        /* Om det stämmer så körs denna kod */
        break;
    case 'B':
        // Annars så körs det här
        break;
    default:
        // Om inget stämmer så blir det den här
}


/* Loopar */
for(var number = 0; number <= 10; number++) {
    /* Gör att number börjar på 0 och medens det 
    är 10 eller mindre så körs koden här sendan
    ökas number med 1 */
}


var number = 1;
while(number < 10) {
    number += 1;
    /* Medans number är mindre än 10 så körs
    koden tills kravet inte längre uppfylls */
}


/* Funktioner */
function myFunction(/* Här är parameterar skickas in */) {
    /* Gör detta för att skriva funktionen. 
    Sedan då den anropas så körs koden här */
}

myFunction(/* Här är argumenten som tas upp av funktionen */);
/* Gör sedan så här för att anropa funktionen */


/* Array */
var myArray = ['Sak 1', 'Sak 2', 'Sak 3'];
/* Detta skapar en ny array och lägger in värden i den. */


var arrayItem = myArray[0];
/* Ger variabeln arrayItem samma värde som myArray 
med index 0 som blir texten Sak 1 */