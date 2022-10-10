const image = document.querySelector('#image')
const searchInput = document.querySelector('#search')
const url = 'https://source.unsplash.com/random/800x600?'

async function getARandomPicture() {
    let search = searchInput.value
    let response = await fetch(url + search)
    image.setAttribute('src', response.url)
    searchInput.value = ''
}

getARandomPicture()