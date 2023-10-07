document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const higherButton = document.getElementById("higher-button");
    const lowerButton = document.getElementById("lower-button");
    const outcome = document.getElementById("outcome");
    const menu = document.getElementById("menu");
    const options = document.getElementById("options");
    const restartButton = document.getElementById("restart-button");
    const quitButton = document.getElementById("quit-button");

    let userChoice;
    let diceOutcome;

    startButton.addEventListener("click", function () {
        startButton.style.display = "none";
        menu.style.display = "block";
    });

    higherButton.addEventListener("click", function () {
        userChoice = "higher";
        playGame();
    });

    lowerButton.addEventListener("click", function () {
        userChoice = "lower";
        playGame();
    });

    restartButton.addEventListener("click", function () {
        menu.style.display = "block";
        options.style.display = "none";
    });

    quitButton.addEventListener("click", function () {
        window.location.reload();
    });

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function playGame() {
        diceOutcome = rollDice();
        outcome.textContent = `Dice Outcome: ${diceOutcome}`;

        if ((diceOutcome >= 4 && userChoice === "higher") || (diceOutcome <= 3 && userChoice === "lower")) {
            outcome.textContent += " - You won!";
        } else {
            outcome.textContent += " - You lost, better luck next time!";
        }

        menu.style.display = "none";
        options.style.display = "block";
    }
});
