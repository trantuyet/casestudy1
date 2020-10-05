
class Mole {
    constructor() {
        this.moles = document.querySelectorAll('.mole');
    }

    setBoth = function peep() {
        const time =  background1.setTime(500, 1500);
        const hole = hole1.setHole(hole1.holes);

        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            background1.scoreBoard.classList.remove('add');
            if (!background1.timeUp) peep();
        }, time);
    }
    timeDisplay = function start() {
        background1.scoreBoard.textContent = background1.score;
        this.timeUp = false;
        background1.scoreBoard.classList.remove('add');
        startScreen.classList.add('hide');

        mole1.setBoth();
    }
}
let lastHole;

class Hole {
    constructor() {
        this.holes = document.querySelectorAll('.hole');
    }
    setHole = function randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) {
            return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }
}

class Background {
    constructor() {
        this.score = 0;
        this.timeUp = false;
        this.showScore = document.querySelector('.show-score');
        this.scoreBoard = document.querySelector('.score');
    }
    setTime = function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    setScore = function bonk(e) {
        if (!this.timeUp) {
            this.scoreBoard.classList.add('add');
            this.score++;
            this.scoreBoard.textContent = this.score;
        }
    }
}

let background1 = new Background() ;
background1.setScore();
background1.scoreBoard();
background1.showScore();
let mole1 = new Mole();
mole1.timeDisplay();
let hole1 = new Hole();
hole1.setHole();


let btnStart = document.querySelector('button');
let startScreen = document.querySelector('.start-screen');

mole1.moles.forEach(mole => {
    mole.addEventListener('click', background1.setScore );
});

btnStart.addEventListener('click', mole1.timeDisplay);