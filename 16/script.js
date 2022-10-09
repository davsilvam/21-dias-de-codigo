const catPicture = document
    .querySelector('#cat_picture')
const button = document
    .querySelector('#button')
const url = 'https://api.thecatapi.com/v1/images/search?mime_types=gif'

button.addEventListener('click', 
    () => getACat())

async function getACat() {
    const res = await fetch(url)
    const data = await res.json()
    let picUrl = await data[0].url
    setCatImage(picUrl)
}

const setCatImage = (pic) => {
    catPicture
        .setAttribute('src', pic)
}

getACat()

