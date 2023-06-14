'use strict';

const message = document.querySelector('.message');
const highscoreLabel = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const input = document.querySelector('.guess');
const score = document.querySelector('.score');

let finalScore = 20;
let highscore2 = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Not a Number';

  } else if (guess === randomNumber) {
    message.textContent = 'Correct Answer';
    number.textContent = randomNumber;
    highscoreLabel.textContent = score;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (finalScore > highscore2 ) {
      highscore2 = score.textContent;
      highscoreLabel.textContent = highscore2;
    } else {
      highscoreLabel.textContent = highscore2;
    }

  } else if (guess > (randomNumber + 5)) {
    if (finalScore > 0) {
      message.textContent = 'Too High';
      finalScore--;
      score.textContent = finalScore;
    } else {
      message.textContent = 'You Lost the Game';
    };

  } else if (guess > randomNumber) {
    if (finalScore > 0) {
      message.textContent = 'Your Number is High';
      finalScore--;
      score.textContent = finalScore;
    } else {
      message.textContent = 'You Lost the Game';
    };

  } else if (guess < (randomNumber - 5)) {
    if (finalScore > 0) {
      message.textContent = 'Too Low';
      finalScore--;
      score.textContent = finalScore;
    } else {
      message.textContent = 'You Lost the Game';
    };

  } else if (guess < randomNumber) {
    if (finalScore > 0) {
      message.textContent = 'Your Number is Low';
      finalScore--;
      score.textContent = finalScore;
    } else {
      message.textContent = 'You Lost the Game';
    };
  }
});

document.querySelector('.again').addEventListener('click', function() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  finalScore = 20;
  score.textContent = finalScore;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?'
  input.value = "";
})