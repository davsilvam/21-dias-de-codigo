const changer = document.querySelector('#changer')
const circle = document.querySelector('#circle')

const colorChangerAndBackground = () => {
    if (changer.checked == true) {
        document.body.classList.add('rainbow')
        circle.classList.add('rainbow')

    } else {
        document.body.classList.remove('rainbow')
        circle.classList.remove('rainbow')
    }
}