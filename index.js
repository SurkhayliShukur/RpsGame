const choices = document.querySelectorAll('.choice');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const messageEl = document.getElementById('message');
const resetButton = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;

const outcomes = {
  rock: { scissors: 'win', paper: 'lose', rock: 'draw' },
  paper: { rock: 'win', scissors: 'lose', paper: 'draw' },
  scissors: { paper: 'win', rock: 'lose', scissors: 'draw' },
};

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];
};

const playRound = (playerChoice) => {
  const computerChoice = getComputerChoice();
  const result = outcomes[playerChoice][computerChoice];

  if (result === 'win') {
    playerScore++;
    messageEl.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You win!`;
  } else if (result === 'lose') {
    computerScore++;
    messageEl.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You lose!`;
  } else {
    messageEl.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. It's a draw!`;
  }

  updateScores();
};

const updateScores = () => {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
};

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  messageEl.textContent = 'Make your choice to start the game!';
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playRound(choice.dataset.choice);
  });
});

resetButton.addEventListener('click', resetGame);