'use strict';

// starting with setting the initial page- that is before the start of game
const score0El = document.querySelector('#score--0');
// this is just another way of selecting the id
const score1El = document.getElementById('score--1');

// set initial scores
score0El.textContent = 0;
score1El.textContent = 0;

// creating a hidden class- where is this hidden class?
//  check for '.hidden' class in css, display is set to none
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
// after the above step, the dice will be hidden to you

// now comes the code logic
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// we need to start by creating a random number
// why a random number? because that number will be used to display number on the dice
btnRoll.addEventListener('click', function() {
    // generate a random number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2 display the number-
    // 2.a remove the hidden class
    diceEl.classList.remove('hidden');
    // 2.b  display dices according to the number we got
    diceEl.src = 'dice - $ { dice }.png';
});