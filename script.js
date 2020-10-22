'use strict';

const _message = document.querySelector('.message');
const _guess = document.querySelector('.guess');
const _check = document.querySelector('.check');

_check.addEventListener('click', function() {
    const _guessValue = +_guess.value;
    if (!_guessValue) {
        _message.textContent = '⛔ No number!';
    }
});