const db = require("../models");
const getRandomQuote = require("../services/getRandomQuote.service");
const getImageUrl = require("../services/getImageUrl.service");
const FamousQuote = db.famousQuotes;

// Create a Famous Quote and their image url
async function saveFamousQuote(req, res) {
    const randomQuote = await getRandomQuote();
    const imageUrl = getImageUrl(randomQuote.quote, randomQuote.author);

    const famousQuote = new FamousQuote({
        quote: randomQuote.quote,
        image: imageUrl
    })

    famousQuote.save()
    .then((data) => {
        res.send({
          message: `Quote creada con éxito`,
          body: JSON.stringify(data)
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error creando la quote",
        });
      });
}

module.exports = {
    saveFamousQuote
}