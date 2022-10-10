const categoryGrid = document.querySelector('#category_grid')
const categoryTitle = document.querySelector('#category_title')
const titles = [
    'Carinhas',
    'Objetos',
    'Comidas',
    'Símbolos'
]
const categoriesDiv = document.querySelector('#categories')
const categories = [...categoriesDiv.children]

categories.forEach(category => {
    let categoryIndex = categories.indexOf(category)
    category.addEventListener('click',
        () => selectCategory(categoryIndex))
})

const clearLastSelected = () => {
    categories.forEach(category => {
        if (category.className.includes('selected'))
            category.classList.remove('selected')
    })
}

const selectCategory = idx => {
    index = idx
    clearLastSelected()
    categories[idx].classList.add('selected')
    limparEmojis()
    definirEmojis()
    categoryTitle.innerHTML = titles[idx]
}

const emojisCategory = [
    ['😀', '😁', '😂', '🤣',
        '😃', '😄', '😅', '😆',
        '😉', '😊', '😋', '😎',
        '😍', '😘', '🥰', '😗',
        '😙', '🥲', '😚', '🙂',
        '🤗', '🤩', '🤔', '🫡',
        '🤨', '😐', '😑', '😶',
        '🫥', '😶‍🌫️'],
    ['🎈', '🧨', '✨', '🎉',
        '🎊', '🎃', '🎄', '🎋',
        '🎍', '🎎', '🎏', '🎐',
        '🎑', '🧧', '🎀', '🎁',
        '🎗️', '🎞️', '🎟️', '🎫',
        '🎠', '🛝', '🎡', '🎢',
        '🎪', '🎭', '🖼️', '🎨',
        '🧵', '🪡', '🧶', '🪢',
        '🛒', '👓'],
    ['🍕', '🍔', '🍟', '🌭',
        '🍿', '🧂', '🥓', '🥚',
        '🍳', '🧇', '🥞', '🧈',
        '🍞', '🥐', '🥨', '🥯',
        '🥖', '🫓', '🧀', '🥗',
        '🥙', '🥪', '🌮', '🌯',
        '🫔', '🍖', '🥫', '🍗',
        '🥩', '🍠', '🥟', '🥠',
        '🥡', '🍱'],
    ['❤️', '🧡', '💛', '💚',
        '💙', '💜', '🤎', '🖤',
        '🤍', '💔', '❤️‍🔥', '❤️‍🩹',
        '❣️', '💕', '💞', '💓',
        '💗', '💖', '💘', '💝',
        '💟', '💌', '💢', '💥',
        '💤', '💦', '💨', '💫',
        '🕳️', '☮️']
]

let index = 0

const definirEmojis = () => {
    emojisCategory[index].forEach(emoji => {
        let emojiDiv = document.createElement('div')
        emojiDiv.addEventListener('click', () => {
            copyEmoji(emojiDiv.innerHTML)
        })
        emojiDiv.textContent = emoji
        categoryGrid.appendChild(emojiDiv)
    })
}

const limparEmojis = () => {
    categoryGrid.innerHTML = ''
}

const copyEmoji = emj => {
    navigator.clipboard.writeText(emj)
}

definirEmojis()