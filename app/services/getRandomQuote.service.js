require("dotenv").config();
const axios = require("axios");

async function getRandomQuote() {
  try {
    const quote = await axios.get(
      "https://andruxnet-random-famous-quotes.p.rapidapi.com/",
      {
        headers: {
          "x-rapidapi-key": process.env.QUOTES_API_KEY,
          "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
          useQueryString: true,
        },
      }
    );
    console.log(quote.data[0]);
    return quote.data[0];
  } catch (error) {
    return error;
  }
}

module.exports = getRandomQuote;
