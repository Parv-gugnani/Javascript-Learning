'use strict';

//selecting the elements from html

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const score0EL = document.getElementById('score--0'); //#only for ids
const score1EL = document.getElementById('score--1'); //getElementById we dont have to use hash or anything to assign a class
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting condition
let score, currentScore, activePlayer, playing;

const init = function () {
  const score = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;
  //
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  //
  diceEL.classList.add('hidden'); //using classlist for adding the classname as we have saved hidden class to display none;
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player1EL.classList.add('player--active');
  player0EL.classList.remove('player--active');
};
//
init();

const SwitchPLayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active'); //toogle will switch automatically
  player1EL.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //
    //1 generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //6 beacuse of dice always have 6 side (lol)
    //   console.log(dice);

    //2 display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //check for Rolled 1 : if true, switch to next player
    if (dice !== 1) {
      //add score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0EL.textContent = currentScore;
      //change later
    } else {
      //switch
      SwitchPLayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1 add current score
    score[activePlayer] += currentScore;
    //   console.log(score[activePlayer]);

    //
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //check if playe's score >=100
    if (score[activePlayer] >= 100) {
      //
      //
      //finsih the game
      playing = false;
      diceEL.classList.add('hidden');
      //
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('Player--winner'); //
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('Player--winner'); //
    } else {
      SwitchPLayer();
    }
  }
});

btnNew.addEventListener('click', init);
