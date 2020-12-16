const FamousQuote = require("../models/famousquote.model");
const getRandomQuote = require("../services/getRandomQuote.service");
const getImageUrl = require("../services/getImageUrl.service");

async function createFamousQuote(req, res) {
  let famousQuote = new FamousQuote();
  let fQuote = await getRandomQuote()
    .then((data) => data)
    .catch({
      quote: "error generating quote",
      author: "Diego",
    });
  const imageUrl = getImageUrl(fQuote.quote, fQuote.author);
  famousQuote.quote = fQuote.quote;
  famousQuote.image = imageUrl;
  let saveQuote = await famousQuote
    .save()
    .then((data) =>
      res.send({
        id: data._id,
        quote: data.quote,
        image: data.image,
      })
    )
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error saving quote",
      });
    });
}

module.exports = {
  createFamousQuote,
};
