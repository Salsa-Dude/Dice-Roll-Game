/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,
    activePlayer,
    roundScore,
    player1CurrentScore,
    player2CurrentScore,
    diceDom,
    isPlaying;

    init();

function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  player1CurrentScore = document.getElementById('current-0');
  player2CurrentScore = document.getElementById('current-1');
  diceDom = document.querySelector('.dice');
  isPlaying = true;
  
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  // Reset scores
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;

}

function switchPlayer() {
  // switch player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  // Reset scores
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;

  // Swich active state
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  diceDom.style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function() {

  if(isPlaying) {
    // Roll dice
    var rollDice = Math.floor(Math.random() * 6) + 1;
  
    // Display dice
    diceDom.style.display = 'block';
    diceDom.src = `img/dice-${rollDice}.png`;

    // Update the roundScore if the roll dice is NOT a 1
    if (rollDice !== 1) {
      // Add score
      roundScore += rollDice;
      // Add roundScore to current player
      document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

  if(isPlaying) {
    // Add curent score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

    // Check if player won the game
    if(scores[activePlayer] >= 20) {
      document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
      diceDom.style.display = 'none';
      document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
      document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
      isPlaying = false;
      
    } else {
      // If no winner, switch player
      switchPlayer(); 
    }
  }
});

document.querySelector('.btn-new').addEventListener('click', init)






