// Define global variables for tracking scores and turns
let userScore = 0;      // Tracks the user's score
let computerScore = 0;  // Tracks the computer's score
let maxTurns = 5;       // Maximum number of turns allowed in the game

// Function to play the game based on user's choice
function play(userChoice) {
    // Check if the game has reached the maximum number of turns
    if (maxTurns === 0) {
        endGame();  // End the game if maxTurns is 0
        return;
    }

    // Array of choices for the computer
    const choices = ['rock', 'paper', 'scissors'];
    // Generate a random index to choose computer's move
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];  // Computer's random choice

    // Determine the winner based on user's choice and computer's choice
    const result = determineWinner(userChoice, computerChoice);

    // Update scores and display result
    updateScores(result);

    // Display the user's and computer's choices and the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`;

    // Decrease the remaining turns
    maxTurns--;

    // Check again if maxTurns is 0 to end the game after this turn
    if (maxTurns === 0) {
        endGame();
    }
}

// Function to determine the winner of the game
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";  // Return tie message if choices are the same
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';  // Return win message for user
    } else {
        return 'You lose!';  // Return lose message for user
    }
}

// Function to update scores based on game result
function updateScores(result) {
    // Get HTML elements to display user's and computer's scores
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');

    // Update scores based on game result
    if (result === 'You win!') {
        userScore++;  // Increment user's score for a win
    } else if (result === 'You lose!') {
        computerScore++;  // Increment computer's score for a win
    }

    // Update displayed scores on the webpage
    userScoreElement.textContent = `Your Score: ${userScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
}

// Function to end the game and display final scores
function endGame() {
    // Display final scores and game over message
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Game Over! Final Scores:<br>Your Score: ${userScore}<br>Computer Score: ${computerScore}`;

    // Disable choice buttons to prevent further gameplay
    const choiceButtons = document.querySelectorAll('.choices button');
    choiceButtons.forEach(button => {
        button.disabled = true;  // Disable each choice button
    });

    // Show the reset button when the game ends
    const resetButton = document.getElementById('reset-button');
    resetButton.style.display = 'block';
}

// Function to reset the game and start again
function resetGame() {
    // Reset scores and turns
    userScore = 0;
    computerScore = 0;
    maxTurns = 5;

    // Reset displayed scores and result
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');
    const resultElement = document.getElementById('result');
    userScoreElement.textContent = `Your Score: ${userScore}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    resultElement.textContent = '';

    // Enable choice buttons for new game
    const choiceButtons = document.querySelectorAll('.choices button');
    choiceButtons.forEach(button => {
        button.disabled = false;  // Enable each choice button
    });

    // Hide the reset button after resetting the game
    const resetButton = document.getElementById('reset-button');
    resetButton.style.display = 'none';
}

// Add event listener to the reset button
document.getElementById('reset-button').addEventListener('click', resetGame);

// Initial setup to hide the reset button
window.onload = function() {
    document.getElementById('reset-button').style.display = 'none';
}


