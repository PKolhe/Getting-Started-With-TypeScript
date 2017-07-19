function startGame() {
    // Starting a new Game
    var messageElement = document.getElementById('messages');
    messageElement.innerText = "Welcome to MultiMath ! Starting a new Game ...";
    console.log("Starting new Game....");
}

document.getElementById('startGame').addEventListener('click', startGame);

/* Below 2 lines will execute and gives output 10 in console with var */
console.log(no);
var no = 10;

/* Below 2 lines will not compile, compile time error with var */
//console.log(someString);
//let someString = "Pankaj";

/* Below 2 lines will execute and gives output Pankaj in console with let and const */
let someString = "Pankaj";
console.log(someString);

const someName = "PankajKolhe";
console.log(someName);