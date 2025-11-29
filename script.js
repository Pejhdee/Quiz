let button_start = document.querySelector('.button-start')
let question = document.querySelector('.question')
let answers = document.querySelectorAll('.answer')
let math_btn = document.querySelector('.math-btn')
let english_btn = document.querySelector('.english-btn')

let query_counter = 0
let correct_answers = 0

button_start.addEventListener('click', function(){
    button_start.style.display = 'none'
    h_3.style.display = 'none'
    h_4.style.display = 'none'
    cir5.style.display = 'none'
    cir6.style.display = 'none'
    cir7.style.display = 'none'
    quiz.style.display = 'flex'
    questions[query_counter].display()
})

function randint(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

let actions = ['+', '-', '/', '*']

class Question {
    constructor(question, wrong_answer1, right_answer, wrong_answer2, wrong_answer3){
        this.question = question
        this.right_answer = right_answer
        this.questions = [
            wrong_answer1,
            right_answer,
            wrong_answer2,
            wrong_answer3
        ]
    }

    shuffle(my_array) {
        for (let i = my_array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            ;[my_array[i], my_array[j]] = [my_array[j], my_array[i]]
        }
        return my_array
    }

    display(){
        this.questions = this.shuffle(this.questions)
        question.innerHTML = this.question
        for (let i = 0; i < answers.length; i++){
            answers[i].innerHTML = this.questions[i]
        }
    }
}

let a = randint(1, 30)
let b = randint(1, 30)
let c = randint(1, 30)
let d = randint(1, 30)

let mathquestions = [
    new Question('20 + 50', 30, 70, 17, 48, 100),
    new Question('√144', 7, 12, 17, 30, 13),
    new Question('15 * 2', 60, 30, 45, 17, 52),
    new Question('√81', 3, 9, 5, 8, 3),
    new Question('60 - 30', 2, 30, 17, 48, 5),
    new Question(`${a} + ${b}`,
        randint((a + b) - 15, (a + b) - 1),
        a + b,
        randint((a + b) - 15, (a + b) - 1),
        randint((a + b) + 1, (a + b) + 15),
        randint((a + b) + 1, (a + b) + 15)),
    new Question(`${c} + ${d}`,
        randint((c + d) - 15, (c + d) - 1),
        c + d,
        randint((c + d) - 15, (c + d) - 1),
        randint((c + d) + 1, (c + d) + 15),
        randint((c + d) + 1, (c + d) + 15)),
]

for(let i = 0; i < answers.length; i++){
    answers[i].addEventListener('click', function(){
        if(answers[i].innerHTML == questions[query_counter].right_answer){
            console.log('Вірно')
            correct_answers++
        } else {
            console.log('Невірно')
        }

        query_counter++
        if (query_counter < questions.length){
            questions[query_counter].display()
        } else {
            showResult()
        }
    })
}

function showResult(){
    cir1.style.display = 'none';
    cir2.style.display = 'none';
    cir3.style.display = 'none';
    cir4.style.display = 'none';
    cir5.style.display = 'flex';
    cir6.style.display = 'flex';
    cir7.style.display = 'flex';
    cir5.style.backgroundColor = '#FF0062';
    cir6.style.backgroundColor = '#FF0062';
    cir7.style.backgroundColor = '#FF0062';
    quiz.innerHTML = `
        <div style="text-align: center;">
            <h1 style="width: 520px;">Квіз завершений</h1>
            <h2>Ви відповіли на запитання: ${correct_answers} з ${questions.length}</h2>
            <div class="button-restart">Грати знову</div>
        </div>
    `
    let restart_quiz_button = document.querySelector('.button-restart')
    restart_quiz_button.addEventListener('click', function(){
        QuizRestart()
    })
}

function QuizRestart(){
    query_counter = 0
    correct_answers = 0

    cir1.style.display = 'flex'
    cir2.style.display = 'flex'
    cir3.style.display = 'flex'
    cir4.style.display = 'flex'
    cir5.style.display = 'none'
    cir6.style.display = 'none'
    cir7.style.display = 'none'
    quiz.style.display = 'flex'
    quiz.innerHTML = `
        <div class="question">20 + 50</div>
        <div class="answers">
            <div class="answer">30</div>
            <div class="answer">70</div>
            <div class="answer">17</div>
            <div class="answer">48</div>
            <div class="answer">100</div>
        </div>   
    `
    question = document.querySelector('.question')
    answers = document.querySelectorAll('.answer')

    for(let i = 0; i < answers.length; i++){
    answers[i].addEventListener('click', function(){
        if(answers[i].innerHTML == questions[query_counter].right_answer){
            console.log('Вірно')
            correct_answers++
        } else {
            console.log('Невірно')
        }

        query_counter++
        if (query_counter < questions.length){
            questions[query_counter].display()
        } else {
            showResult()
        }
    })
}
question[query_counter].display()
}


