function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    const result = determineWinner(userChoice, computerChoice);

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`;
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
        return 'you lose!';
    }
}
