const passText = document
    .querySelector('#response')
const copyButton = document
    .querySelector('#copy_button')

const generatePassword = () => {
    let pass =  Math.random().toString(36)
    .toUpperCase().slice(2)
    passText.innerHTML = pass
}

copyButton.addEventListener('click', 
    () => copyPass())

const copyPass = () => {
    if (passText.textContent == '________') {
        return
    }
    navigator.clipboard.writeText(passText.textContent)
    alert('Senha copiada!')
}