require('dotenv').config()

function getImageUrl(quote, author) {
    let url = `https://on-demand.bannerbear.com/taggedurl/${process.env.API_IMAGES_URL_BASE}/image.jpg?modifications=[message---text=${quote},author---text=${author}]`
    return url
}

module.exports = getImageUrl;