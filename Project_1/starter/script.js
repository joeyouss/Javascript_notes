'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;

// this will give empty as there is nothing rn so we set it to a number

// document.querySelector('.guess').value = 89;

// START DEVELOPING
// choosing a special number randomly
let special = Math.trunc(Math.random() * 20) + 1;

// state variable - holding data of all parts of our application
let score = 20;
let highscore = 0;
// event is eomthing happening on a page
// event listeners listen for those events
document.querySelector('.check').addEventListener('click', function() {
    // we do not choose "btn class" because it is generic
    const guess = Number(document.querySelector('.guess').value);
    // the extra function is event handler and is used to do stuff with the selector

    // developing first scenario where there is no input
    if (!guess) {
        document.querySelector('.message').textContent = ' 🙄 No Number!';
    } else if (guess === special) {
        document.querySelector('.message').textContent =
            ' 😍 Your guess is correct!';
        score += 1;
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = special;
    }
    // if score is greater than 0
    else if (score > 1) {
        if (guess > special) {
            document.querySelector('.message').textContent = ' 😣 Too high guess';
            score -= 1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🙄 Too low guess';
            score -= 1;
            document.querySelector('.score').textContent = score;
        }
    } else {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = '😥 You Lost game';
        document.querySelector('body').style.backgroundColor = '#643ed5';
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    special = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(128, 0, 128)';
    document.querySelector('.guess').value = '';
});