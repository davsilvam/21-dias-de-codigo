const rocket = document.querySelector('#rocket')
let spaceMile = 1
let rocketPosition = 5

document.body.addEventListener('keydown', () => moveRocket())

const moveRocket = () => {
    let key = event.keyCode
    if (key == 39) {
        if (spaceMile > 15) {
            alert('Hello World!')
            return
        }
        spaceMile += 1
        rocket.style.left = String(rocketPosition * spaceMile) + '%'
    } else if (key == 37) {
        if (spaceMile == -1) {
            alert('Ops! Bye World!')
        }
        spaceMile -= 1
        rocket.style.left = String(rocketPosition * spaceMile) + '%'
    }
}