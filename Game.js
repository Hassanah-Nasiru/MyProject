let player1Choice = '';
let player2Choice = '';

const resultMessageElement = document.getElementById('result-message');
const resetButton = document.getElementById('reset');

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
  choice.addEventListener('click', function() {
    const player = this.getAttribute('data-player');
    const choiceValue = this.getAttribute('data-choice');

    if (player === '1') {
      player1Choice = choiceValue;
      document.getElementById('player1-choices').style.pointerEvents = 'none'; // Disable Player 1 buttons
      resultMessageElement.textContent = 'Player 1 has chosen. Waiting for Player 2...';
    } else if (player === '2') {
      player2Choice = choiceValue;
      document.getElementById('player2-choices').style.pointerEvents = 'none'; // Disable Player 2 buttons
      determineWinner();
    }
  });
});

function determineWinner() {
  if (player1Choice === player2Choice) {
    resultMessageElement.textContent = `It's a Draw! Both chose ${capitalize(player1Choice)}.`;
  } else if (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'paper' && player2Choice === 'rock') ||
    (player1Choice === 'scissors' && player2Choice === 'paper')
  ) {
    resultMessageElement.textContent = `Player 1 Wins! ${capitalize(player1Choice)} beats ${capitalize(player2Choice)}.`;
  } else {
    resultMessageElement.textContent = `Player 2 Wins! ${capitalize(player2Choice)} beats ${capitalize(player1Choice)}.`;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Reset the game
resetButton.addEventListener('click', function() {
  player1Choice = '';
  player2Choice = '';
  document.getElementById('player1-choices').style.pointerEvents = 'auto';
  document.getElementById('player2-choices').style.pointerEvents = 'auto';
  resultMessageElement.textContent = 'Waiting for players to choose...';
});