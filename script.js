'use strict';

const _messageElement = document.querySelector('.message');
const _guessElement = document.querySelector('.guess');
const _checkElement = document.querySelector('.check');
const _numberElement = document.querySelector('.number');
const _scoreElement = document.querySelector('.score');
const _bodyElement = document.querySelector('body');
const _againElement = document.querySelector('.again');
const _highScoreElement = document.querySelector('.highScore');

let _secretNumber = 0;
let _scoreValue = 0;
let _highScoreValue = 0;

initValue();

function initValue() {
    _secretNumber = Math.trunc(Math.random() * 20) + 1;
    _scoreValue = 20;
    _guessElement.value = null;
}

// reset everything
_againElement.addEventListener('click', function() {
    initValue();
    updateStyles('#222', '15rem');
    setContent(_numberElement, '?');
    setContent(_messageElement, 'Start guessing...');
    setContent(_scoreElement, _scoreValue);
});

_checkElement.addEventListener('click', function() {
    const _guessValue = +_guessElement.value;

    // when no input
    if (!_guessValue) {
        setContent(_messageElement, '⛔ No number!');
    }

    // when have the correct value
    else if (_guessValue === _secretNumber) {
        setContent(_messageElement, '🎉 Correct number!');
        setContent(_numberElement, _secretNumber);
        setHighScore();
        updateStyles('#60b347', '30rem');
    }

    // when the input value is too high
    else if (_guessValue > _secretNumber) {
        checkScoreCondition('📈 Too high!');
    }

    // when the input is too low
    else if (_guessValue < _secretNumber) {
        checkScoreCondition('📉 Too low!');
    }
});

// set the value in the dom
function setContent(element, content) {
    element.textContent = content;
}

// check the score value and according to that update the score value and value in the dom.
function checkScoreCondition(message) {
    if (_scoreValue > 1) {
        setContent(_messageElement, message);
        updateScore();
    } else if (_scoreValue === 1) {
        setContent(_messageElement, '💥 You lost the game!');
        updateScore();
    }
}

function updateScore() {
    _scoreValue--;
    setContent(_scoreElement, _scoreValue);
}

function updateStyles(bgColor, width) {
    _bodyElement.style.backgroundColor = bgColor;
    _numberElement.style.width = width;
}

// setting the highScore
function setHighScore() {
    if (_highScoreValue === 0 || _highScoreValue < _scoreValue) {
        _highScoreValue = _scoreValue;
        setContent(_highScoreElement, _scoreValue);
    }
}