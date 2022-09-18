const operation = document.querySelector('#operation')
const lastOperator = document.querySelector('#last_operator')

const insert = num => {
    operation.innerHTML += num
    if (num == '/' || num == '*' || num == '+' || num == '-' || num == '%') {
        putOnTop()
    }
}

const cleanLast = () => {
    operation.innerHTML = operation.innerHTML.slice(0, -1)
}

const cleanAll = () => {
    operation.innerHTML = ''
    lastOperator.innerHTML = ''
}

const putOnTop = () => {
    lastOperator.innerHTML += operation.textContent
    operation.innerHTML = ''
}

const result = () => {
    if (lastOperator.innerHTML != '' && operation.innerHTML != '') {
        let completeOperation = lastOperator.innerHTML + operation.innerHTML
        lastOperator.innerHTML = ''
        operation.innerHTML = eval(completeOperation)
    } else {
        alert('Sem cálculos!')
    }
}