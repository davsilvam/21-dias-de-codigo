const hamburger = document.querySelector('#hamburger')
const hamburgerMenu = document.querySelector('#hamburger_menu')
const aside = document.querySelector('aside')

hamburger.addEventListener('change', () => abrirMenu())

const abrirMenu = () => {
    if (hamburger.checked) {
        aside.style.right = '0'
    } else {
        aside.style.right = '-100%'
    }
}