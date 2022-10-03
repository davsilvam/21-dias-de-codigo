const ask = document.querySelector('#ask')
const answers = document.querySelectorAll('.answer')
const answersArray = Array.from(answers)

const askAndQuestions = [
    {
        ask: 'Qual desses não é um Framework?',
        a0: 'Vue',
        a1: 'React',
        a2: 'Angular',
        a3: 'NodeJS',
        correct: 3
    },
    {
        ask: 'Qual dessas é uma linguagem de programação?',
        a0: 'JavaScript',
        a1: 'HTML',
        a2: 'CSS',
        a3: 'SASS',
        correct: 0
    },
    {
        ask: 'Qual foi o ano em que o JavaScript foi inventado?',
        a0: '1992',
        a1: '1995',
        a2: '1998',
        a3: 'Um dia desses...',
        correct: 1
    },
    {
        ask: 'Todos sabemos que o primeiro código ao se aprender uma nova linguagem é:',
        a0: 'Olá, Mundo!',
        a1: 'Opa, vizinhança!',
        a2: 'Eae, bairro!',
        a3: 'Olá, cidadezinha!',
        correct: 0
    },
]

let questionCounter = 0

const setAskAndQuestions = () => {
    ask.textContent = askAndQuestions[questionCounter].ask
    answers[0].textContent = askAndQuestions[questionCounter].a0
    answers[1].textContent = askAndQuestions[questionCounter].a1
    answers[2].textContent = askAndQuestions[questionCounter].a2
    answers[3].textContent = askAndQuestions[questionCounter].a3
}

setAskAndQuestions()

const setTheCorrect = () => {
    let correctAns = askAndQuestions[questionCounter].correct
    answers[correctAns].classList.add('correct')
}

const setTheWrong = () => {
    let correctAns = askAndQuestions[questionCounter].correct
    const wrongAnswers = answersArray.filter(ans => {
        if (answersArray.indexOf(ans) != correctAns)
            return ans
    })
    wrongAnswers.forEach(aws => aws.classList.add('wrong'))
}

answers.forEach(aws => {
    aws.addEventListener('click',
        () => { checkAndGoToNext() })
})

const checkAndGoToNext = () => {
    setTheCorrect()
    setTheWrong()
    questionCounter = questionCounter + 1
    if (questionCounter > 3)
        questionCounter = 0
    setTimeout(() => {
        cleanClasses()
        setAskAndQuestions()
    }, 3000)
}

const cleanClasses = () => {
    answers.forEach(aws => {
        aws.classList.remove('correct', true)
        aws.classList.remove('wrong', true)
    })
}