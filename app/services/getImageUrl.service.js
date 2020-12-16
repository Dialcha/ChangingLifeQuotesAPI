require('dotenv').config()

function getImageUrl(quote, author) {
    const cleanQuote = quote.split(' ').join('+').split(',').join('.')
    const cleanAuthor = author.split(' ').join('+').split(',').join('.')
    let url = `https://on-demand.bannerbear.com/taggedurl/${process.env.API_IMAGES_URL_BASE}/image.jpg?modifications=[message---text=${cleanQuote},author---text=${cleanAuthor}]`
    return url
}

module.exports = getImageUrl;