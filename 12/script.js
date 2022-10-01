const cards = document.querySelectorAll('.card')
let currentCard = 0
const maxCards = cards.length
const controls = document.querySelectorAll(".control")

controls.forEach(control => {
    control.addEventListener('click', e => {
        const isLeft = e.target.classList.contains("arrow-left")

        isLeft == true
            ? currentCard -= 1
            : currentCard += 1

        if (currentCard >= maxCards)
            currentCard = 0

        if (currentCard < 0)
            currentCard = maxCards - 1

        cardAdjuster()
    })
})

let cardsArray = Array.from(cards)

cardsArray.forEach(cardArray => {
    let indexOfCard = cardsArray.indexOf(cardArray)
    cardArray.addEventListener('click', () => {
        currentCard = indexOfCard
        cardAdjuster()
    })
})


const cardAdjuster = () => {
    cards.forEach(card =>
        card.classList.remove('current_card'))

    cards[currentCard].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    })

    cards[currentCard].classList.add("current_card")
}