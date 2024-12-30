import './style.scss';
import questions from './modules/questions';


// -----------------------------------------------------------------------------
// --------------------------------- VARIABLES ---------------------------------
// -----------------------------------------------------------------------------

const playGameBtn  = document.querySelector('#playGameBtn');
const logoInHeader = document.querySelector('#logoInHeader');
// const homePage = document.querySelector('#homePage');

playGameBtn!.addEventListener('click', playGame);

console.log(playGameBtn);

function playGame(){
    alert('knappen klickas');
    
}

logoInHeader!.addEventListener('click', goBackToStartPage);

function goBackToStartPage(){
    window.location.href = '/';
}

// prepared variables for future use, they are currently commented out until they are used
// let currentScore = 0; 
// let currentTimeInTimer = 0; 

// temporary solution to error for not using variable
console.log(questions);



// -----------------------------------------------------------------------------
// --------------------------------- START GAME --------------------------------
// -----------------------------------------------------------------------------

const playGameBtnContainer = document.querySelector('#playGameBtnContainer');
const questionContainer = document.querySelector('section');

function playGame() {
    currentScore = 0;
    currentTimeInTimer = 0;

    playGameBtnContainer!.classList.toggle('hidden');
    questionContainer!.classList.toggle('hidden');

    //call on function displayQuestion()
    //call on function startTimer()
}

playGame();