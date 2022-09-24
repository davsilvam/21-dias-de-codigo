const toogler = document
    .querySelector('#toogler')
const themeIcon = document
    .querySelector('#theme_icon')

toogler.addEventListener('change', () => { changeTheme() })

const changeTheme = () => {
    if (toogler.checked) {
        document.body.classList.add('dark')
        themeIcon.setAttribute('src', 'img/dark-mode.svg')
    } else {
        document.body.classList.remove('dark', true)
        themeIcon.setAttribute('src', 'img/light-mode.svg')
    }
}