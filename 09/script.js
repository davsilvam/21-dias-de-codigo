const message = document
    .querySelector('p')
let counter = 0

const changeMessage = () => {
    setInterval(
        () => { switchMessage(); counter++}
        , 8000
    )
}

const switchMessage = () => {
    counter % 2 == 0 ?
        message.textContent = 
        'Isso pode demorar um pouco, pegue um ☕.' 
        :
        message.textContent = 
        'Estamos carregando a página para você!' 
}

changeMessage()