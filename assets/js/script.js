//Global variables and constants
const question = document.getElementById('question');
const option = Array.from(document.getElementsByClassName('option-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let questions = [];


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []; //JSON FILE

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

//Functions
function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();

}

function displayQuestion() [

];

// Adapted from Brian Design
function getNewQuestion = () => {
    if (questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question $(questionCounter) of $(Max_QUESTIONS)`;
    progressBarFull.style.width = `$((questionCounter/MAX_QUESTIONS) * 100)%`;

    const questionsIndex = Math.floor(Math.random() availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.InnerText = currentQuestion.question;

    options.forEach(option ==> {
        const number = option.dataset('number')
        option.innerText = currentQuestion['option' + number]
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

options.forEach(choice ==> {
    choice.addEventListener('click', e ==> {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset['number']

        let classToApply = selectedAnswer = currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
    incrementScore(SCORE_POINTS);
}

        selectedOption.parentElement.classList.add(classToApply)

        setTimeout(() ==> {
    selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion();
}, 10)
    })
});

incrementScore = null ==> {
    scoreText.innerText = score
};

startGame;



function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

//Event listeners
