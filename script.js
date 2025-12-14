let question = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')

let english_btn = document.querySelector('.english-btn')
let math_btn = document.querySelector('.math-btn')
let geography_btn = document.querySelector('.geography-btn')

let quiz = document.querySelector('.quiz')
let restart_btn = document.querySelector('.button-restart')
let button_start = document.querySelector('.button-start')

let questions = []
let query_counter = 0
let correct_answers = 0


function randint(min, max){
    return Math.round(Math.random() * (max - min) + min)
}


class Question {
    constructor(question, right_answer, ...wrong_answers){
        this.question = question
        this.right_answer = right_answer
        this.answers = [right_answer, ...wrong_answers]
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }

    display(){
        this.shuffle(this.answers)
        question.innerHTML = this.question

        for (let i = 0; i < answers.length; i++){
            answers[i].innerHTML = this.answers[i]
        }
    }
}



let a = randint(5, 40)
let b = randint(5, 40)

let englishquestions = [
    new Question("Dog — це:", "собака", "кіт", "риба", "птах", "олень"),
    new Question("Blue — це:", "синій", "червоний", "зелений", "жовтий", "білий"),
    new Question("Sun — це:", "сонце", "місяць", "зірка", "земля", "вода")
]

let mathquestions = [
    new Question("20 + 50", 70, 30, 17, 48, 100),
    new Question("√144", 12, 7, 17, 30, 13),
    new Question(`${a} + ${b}`, a + b, a + b - 3, a + b + 5, a + b - 7, a + b + 2)
]

let geographyquestions = [
    new Question("Столиця України:", "Київ", "Львів", "Харків", "Одеса", "Дніпро"),
    new Question("Найбільший океан:", "Тихий", "Атлантичний", "Індійський", "Північний", "Південний"),
    new Question("Найбільший континент:", "Азія", "Європа", "Африка", "Антарктида", "Австралія")
]


english_btn.onclick = () => { questions = englishquestions; startQuiz() }
math_btn.onclick = () => { questions = mathquestions; startQuiz() }
geography_btn.onclick = () => { questions = geographyquestions; startQuiz() }



function startQuiz(){
    english_btn.style.display = 'none'
    math_btn.style.display = 'none'
    geography_btn.style.display = 'none'

    quiz.style.display = 'flex'
    query_counter = 0
    correct_answers = 0

    questions[query_counter].display()
}

answers.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.innerHTML == questions[query_counter].right_answer) {
            correct_answers++
        }

        query_counter++

        if (query_counter < questions.length){
            questions[query_counter].display()
        } else {
            showResult()
        }
    })
})

function showResult(){
    quiz.innerHTML = `
        <h1>Квіз завершено!</h1>
        <h2>Правильних відповідей: ${correct_answers} з ${questions.length}</h2>
    `
    restart_btn.style.display = 'block'
}


restart_btn.addEventListener('click', function() {
    restart_btn.style.display = 'none'
    quiz.style.display = 'none'

    english_btn.style.display = 'flex'
    math_btn.style.display = 'flex'
    geography_btn.style.display = 'flex'

    quiz.innerHTML = `<div class="question"></div>
        <div class="answers">
        <button class="answer"></button>
        <button class="answer"></button>
        <button class="answer"></button>
        <button class="answer"></button>
        <button class="answer"></button>
        </div>`
        question = document.querySelector('.question')
        answers = document.querySelectorAll('.answer')

        for (let btn of answers){
            btn.addEventListener('click', function() {

            if (btn.innerHTML == questions[query_counter].right_answer) {
            correct_answers++
        }

        query_counter++

        if (query_counter < questions.length){
            questions[query_counter].display()
        } else {
            showResult()
        }
            })
        }
})
