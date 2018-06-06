/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;
var player1CurrentScore = document.getElementById('current-0');
var player2CurrentScore = document.getElementById('current-1');


document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

 // Reset scores
 player1CurrentScore.textContent = 0;
 player2CurrentScore.textContent = 0;




document.querySelector('.btn-roll').addEventListener('click', function() {
  
  // Roll dice
  var rollDice = Math.floor(Math.random() * 6) + 1;
  
  // Display dice
  var diceDom = document.querySelector('.dice');
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
});

