const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const score = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
} 

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct =selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){

    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Who is Charlies father?',
        answers: [
            {text: 'Frank', correct: true},
            {text: 'Luther', correct: false},
            {text: 'Bruce', correct: false},
            {text: 'Nightman', correct: false}
         ] } ,
         {
        
        question: 'What is the Dayman known for?',
        answers: [
            {text: 'Being a master of friendship', correct: false},
            {text: 'Being a master of karate', correct: false},
            {text: 'Fighing the Nightman', correct: false},
            {text: 'All of the above', correct: true}
        ],
    },
    {
        question:  'Dennis is asshole why Charlie hate?',
        answers: [
            {text: 'Because Dennis is a bastard man', correct: true},
            {text: 'Because Dennis banged the waitres', correct: false},
            {text:  'Because Dennis made charlie crippled', correct: false},
            {text: 'Because of nam', correct: false}
        ]
    },
    {
        question: 'Which of the following is not an ingredient in Fight Milk?',
        answers: [
            {text: 'Alcohol', correct: false},
            {text: 'Milk', correct: false},
            {text: 'Protien powder', correct: true},
            {text: 'Crow eggs', correct: false}
        ]
    },
    {
        question: 'Who did the dishes?',
        answers: [
            {text: 'Charlie', correct: false},
            {text: 'Dennis', correct: false},
            {text: 'Dee', correct: true},
            {text: 'Frank', correct: false}
        ]
    },
    {
        question: 'What actor is the star of the movie Crime stinks the smell of penetration?',
        answers: [
            {text: 'Dolph Lundgren', correct: true},
            {text: 'Charlie Kelly', correct: false},
            {text: 'Glenn Howerton', correct: false},
            {text: 'Ronald Mcdonald', correct: false}
        ]
    },
    {
        question: 'Who wasnt Thundergun enough to see Thundergun Express?',
        answers: [
            {text: 'Charlie', correct: false},
            {text: 'Frank', correct: true},
            {text: 'Dennis', correct: false},
            {text: 'Dee', correct: false}
        ]
    },
    {
        question: 'Which of these things werent in Charlies dream journal?',
        answers: [
            {text: 'Denim Chicken', correct: false},
            {text: 'Worm hat', correct: false},
            {text: 'Green man', correct: true},
            {text: 'Bird with teeth', correct: false}
        ]
    },
    {
        question: 'What did the gang get Charlie for his bday?',
        answers: [
            {text: 'Box of hornets', correct: false},
            {text: 'Green man suit', correct: false},
            {text: 'Kitten Mittens', correct: false},
            {text: 'Rat bashing stick', correct: true}
        ]
    },
    {
        question: 'If there is a potential riot, what is the gang getting blasted on?',
        answers: [
            {text: 'Sambuca', correct: false},
            {text: 'Riot Punch', correct: true},
            {text: 'Gin', correct: false},
            {text: 'White Russian', correct: false}
        ]
    }
]