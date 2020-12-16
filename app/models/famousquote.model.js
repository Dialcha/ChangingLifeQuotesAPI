require("dotenv").config();
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let famousQuote = new Schema({
  quote: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model(process.env.DB_FQ_COLECTION, famousQuote);
