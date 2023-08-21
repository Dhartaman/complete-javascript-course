'use strict';

// document.querySelector() => DOM entry point
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;

const displayMessage = message => {
	document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);

	if (!score) {
		// when no imput
	} else if (!guess) {
		// document.querySelector('.message').textContent = 'No number!';
		displayMessage('No number!');

		// when player wins
	} else if (guess === secretNumber) {
		document.querySelector('.number').textContent = secretNumber;
		displayMessage('Correct Number!');

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

		//when score is wrong
	} else if (guess !== secretNumber) {
		displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
		score--;
		document.querySelector('.score').textContent = score;
	}

	// game over
	if (score === 0) {
		displayMessage('You lost the game!');
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
