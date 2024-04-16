// Define global variables for tracking scores and turns
let userScore = 0;
let computerScore = 0;
let maxTurns = 5; // Maximum number of turns

function play(userChoice) {
    if (maxTurns === 0) {
        endGame();
        return;
    }

    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const result = determineWinner(userChoice, computerChoice);

    updateScores(result);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`;

    maxTurns--;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function updateScores(result) {
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');

    if (result === 'You win!') {
        userScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }

    userScoreElement.textContent = `Your Score: ${userScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
}

function endGame() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Game Over! Final Scores:<br>Your Score: ${userScore}<br>Computer Score: ${computerScore}`;

    // Disable choice buttons
    const choiceButtons = document.querySelectorAll('.choices button');
    choiceButtons.forEach(button => {
        button.disabled = true;
    });
}

