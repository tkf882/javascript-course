let score = JSON.parse(localStorage.getItem('score')) || {wins: 0,loses: 0,ties: 0};

if (!score) { // score === null
score = {
    wins: 0,
    loses: 0,
    ties: 0
};
}

updateScoreElement();

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock'
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper'
} else if (randomNumber >= 2/3) {
    computerMove = 'scissors'
}
return computerMove;
}

let isAutoPlaying = false;
let intervalId;

// const autoPlay = () => {} // Arrow function version, but seems less readable and no Hoisting
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
        document.querySelector('.js-auto-play-button').innerHTML = 'Stop Playing';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
    }
}

function reset() {
    document.querySelector('.js-confirm-reset').innerHTML = `
    Are you sure you want to reset the score?
    <button class='reset-score-button js-reset-confirm-yes'>Yes</button>
    <button class='reset-score-button js-reset-confirm-no'>No</button>
    `;

    document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
        score.wins = 0;
        score.loses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
        document.querySelector('.js-confirm-reset').innerHTML = '';
    })

    document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
        document.querySelector('.js-confirm-reset').innerHTML = '';
    })

}




document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    }
})

document.querySelector('.js-reset-score-button').addEventListener('click', () => reset());

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        reset();
    }
})

function playGame(playerMove) {
    let result = '';
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
        if (computerMove === 'rock' ) {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Its a tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Its a tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Its a tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    }
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.loses += 1;
    } else if (result === 'Its a tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`);
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"> <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;
}
