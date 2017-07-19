function startGame() {
    // Starting a new Game
    var messageElement = document.getElementById('messages');
    messageElement.innerText = "Welcome to MultiMath ! Starting a new Game ...";
    console.log("Starting new Game....");
}

document.getElementById('startGame').addEventListener('click', startGame);