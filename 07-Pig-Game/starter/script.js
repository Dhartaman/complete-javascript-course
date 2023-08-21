'use strict';

const imgDice = document.querySelector('.dice');

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
imgDice.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

const init = () => {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	imgDice.classList.add('hidden');
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
	player1El.classList.remove('player--active');
};
init();

const rollDice = () => {
	return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = diceNumber => {
	//console.log(diceNumber);
	imgDice.classList.remove('hidden');
	imgDice.src = `dice-${diceNumber}.png`;
};

const updatePlayerScore = () => {
	scores[activePlayer] += currentScore;
	document.getElementById(`score--${activePlayer}`).textContent =
		scores[activePlayer];
};

const updateCurrentScore = diceNumber => {
	currentScore += diceNumber;
	document.getElementById(`current--${activePlayer}`).textContent =
		currentScore;
};

const switchPlayer = () => {
	currentScore = 0;
	document.getElementById(`current--${activePlayer}`).textContent =
		currentScore;

	activePlayer = activePlayer === 1 ? 0 : 1;

	player0El.classList.toggle('player--active');
	player1El.classList.toggle('player--active');
};

const playerWins = () => {
	playing = false;
	imgDice.classList.add('hidden');
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.add('player--winner');
	document
		.querySelector(`.player--${activePlayer}`)
		.classList.remove('player--active');
	document.getElementById(`current--${activePlayer}`).textContent = 0;
};

btnRoll.addEventListener('click', function () {
	if (playing) {
		// Get random dice number
		const diceNumber = rollDice();

		// display dice result
		displayDice(diceNumber);

		// Check for rolled 1
		if (diceNumber === 1) {
			switchPlayer();
		} else {
			updateCurrentScore(diceNumber);
		}
	}
});

btnHold.addEventListener('click', function () {
	if (playing) {
		updatePlayerScore();

		if (scores[activePlayer] >= 100) {
			playerWins();
		} else {
			switchPlayer();
		}
	}
});

btnNewGame.addEventListener('click', init);
