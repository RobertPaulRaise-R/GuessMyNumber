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

const displayMessage = function(content) {
  message.textContent = content;
};

const displayNumber = function() {
  number.textContent = randomNumber;
};

const displayHighscore = function(highscore) {
  highscoreLabel.textContent = highscore;
}

const displayCurrentScore = function() {
  score.textContent = finalScore;
}

const changeBackgroundColor = function(colour) {
  body.style.backgroundColor = colour;
}

const changeWidth = function(length) {
  number.style.width = length;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Not a Number';

  } else if (guess === randomNumber) {
    displayMessage('Correct Answer');
    displayNumber();
    displayHighscore(score);
    changeBackgroundColor('#60b347');
    changeWidth('30rem')
    if (finalScore > highscore2 ) {
      highscore2 = score.textContent;
      displayHighscore(highscore2);
    } else {
      displayHighscore(highscore2);;
    }

  } else if (guess !== randomNumber ) {
    if (finalScore > 0) {
      displayMessage(guess > randomNumber ? 'Too High' : 'Too Low');
      finalScore--;
      displayCurrentScore();
    } else {
      displayMessage('You Lost the Game');
    };
  }
});

document.querySelector('.again').addEventListener('click', function() {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  finalScore = 20;
  displayCurrentScore();
  changeBackgroundColor('#222');
  changeWidth('15rem');
  number.textContent = '?'
  input.value = "";
})