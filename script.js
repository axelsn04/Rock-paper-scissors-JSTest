// Rock, Paper, Scissors Game

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerChoice = getComputerChoice();

    if (computerChoice === playerSelection) {
        return "It's a tie!";
    } else if (
        (computerChoice === 'rock' && playerSelection === 'scissors') ||
        (computerChoice === 'paper' && playerSelection === 'rock') ||
        (computerChoice === 'scissors' && playerSelection === 'paper')
    ) {
        return "Computer wins!";
    } else {
        return "You win!";
    }
}

const resultDiv = document.createElement('div');
const scoreDiv = document.createElement('div');
document.body.appendChild(resultDiv);
document.body.appendChild(scoreDiv);

// FIXED: this selects all button elements
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent.toLowerCase();
        const result = playRound(playerSelection);

        if (result === "You win!") {
            humanScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        }

        resultDiv.textContent = result;
        scoreDiv.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

        // Move this block inside the event listener
        if (humanScore === 5 || computerScore === 5) {
            const winner = humanScore === 5 ? "You" : "Computer";
            resultDiv.textContent = `${winner} won the game!`;
            buttons.forEach(button => button.disabled = true);
        }
    });
});
