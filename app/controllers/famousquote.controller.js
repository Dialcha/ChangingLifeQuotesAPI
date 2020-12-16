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

function findFamousQuoteById(req, res) {
  const id = req.params.id;

  FamousQuote.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "Not famous quote found with id " + id });
      else
        res.send({
          id: data._id,
          quote: data.quote,
          image: data.image,
        });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving famous quote with id=" + id });
    });
}

function deleteQuoteById(req, res) {
  const id = req.params.id;
  FamousQuote.findByIdAndDelete(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: `The quote with id ${id} doesn't exist` });
      else
        res.send({
          id: data._id,
          message: `Quote with id ${id} deleted successfully`,
        });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error deleting famous quote with id=" + id });
    });
}

module.exports = {
  createFamousQuote,
  findFamousQuoteById,
  deleteQuoteById,
};
