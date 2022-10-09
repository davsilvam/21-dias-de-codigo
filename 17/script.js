const response = document.querySelector('#response')

window.document.addEventListener('keydown',
    () => getKey(event) )

const getKey = e => {
    let key = e.key
    const code = e.keyCode

    if (code == 32) {
        key = 'Barra de Espaço'
    }

    response.innerHTML = `A tecla é: ${key} e seu código é ${code}.`
}