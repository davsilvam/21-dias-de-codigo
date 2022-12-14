const categoryGrid = document.querySelector('#category_grid')
const categoryTitle = document.querySelector('#category_title')
const titles = [
    'Carinhas',
    'Objetos',
    'Comidas',
    'Sรญmbolos'
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
    ['๐', '๐', '๐', '๐คฃ',
        '๐', '๐', '๐', '๐',
        '๐', '๐', '๐', '๐',
        '๐', '๐', '๐ฅฐ', '๐',
        '๐', '๐ฅฒ', '๐', '๐',
        '๐ค', '๐คฉ', '๐ค', '๐ซก',
        '๐คจ', '๐', '๐', '๐ถ',
        '๐ซฅ', '๐ถโ๐ซ๏ธ'],
    ['๐', '๐งจ', 'โจ', '๐',
        '๐', '๐', '๐', '๐',
        '๐', '๐', '๐', '๐',
        '๐', '๐งง', '๐', '๐',
        '๐๏ธ', '๐๏ธ', '๐๏ธ', '๐ซ',
        '๐ ', '๐', '๐ก', '๐ข',
        '๐ช', '๐ญ', '๐ผ๏ธ', '๐จ',
        '๐', '๐'],
    ['๐', '๐', '๐', '๐ญ',
        '๐ฟ', '๐ง', '๐ฅ', '๐ฅ',
        '๐ณ', '๐ง', '๐ฅ', '๐ง',
        '๐', '๐ฅ', '๐ฅจ', '๐ฅฏ',
        '๐ฅ', '๐ซ', '๐ง', '๐ฅ',
        '๐ฅ', '๐ฅช', '๐ฎ', '๐ฏ',
        '๐ซ', '๐', '๐ฅซ', '๐',
        '๐ฅฉ', '๐ '],
    ['โค๏ธ', '๐งก', '๐', '๐',
        '๐', '๐', '๐ค', '๐ค',
        '๐ค', '๐', 'โค๏ธโ๐ฅ', 'โค๏ธโ๐ฉน',
        'โฃ๏ธ', '๐', '๐', '๐',
        '๐', '๐', '๐', '๐',
        '๐', '๐', '๐ข', '๐ฅ',
        '๐ค', '๐ฆ', '๐จ', '๐ซ',
        '๐ณ๏ธ', 'โฎ๏ธ']
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