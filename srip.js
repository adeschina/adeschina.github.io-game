const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement =Array.from (document.getElementById('answer-buttons'))
const choices = Array.from(document.getElementsByClassName('choice-text'))


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
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
question.answers.forEach(answer => {
    const button = document.createElement('choice-text')
    button.innerText = answer.text
    button.classList.add('number')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
}
    
    )
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
}else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}

}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
{
    question: 'What is 2 + 2?',
    answers: [
        {choice: '4', correct: true},
        {choice: '6', correct: false},
        {choice: '10', correct: false},
        {choice: '20', correct: false}
    ]
},
{
    question: 'What is 2 + 10?',
    answers: [
        {choice: '4', correct: false},
        {hoice: '6', correct: false},
        {choice: '12', correct: true},
        {choice: '20', correct: false}
    ]
},
{
    question: 'What is a noun?',
    answers: [
        {text: 'Shina', correct: true},
        {text: '6', correct: false},
        {text: '10', correct: false},
        {text: '20', correct: false}
    ]
},
{
    question: 'Select type of programming language from the list',
    answers: [
        {text: 'Ludo', correct: false},
        {text: 'Town', correct: false},
        {text: 'Pycharm', correct: false},
        {text: 'Java', correct: true}
    ]
},
{
    question: 'Which of the list is a name of a Country',
    answers: [
        {text: 'Ilorin', correct: false},
        {text: 'Nigeria', correct: true},
        {text: 'Lagos', correct: false},
        {text: 'Ibadan', correct: false}
    ]
}

]
