module.exports = async app => {
    let router = require("express").Router();

    const famousQuote = require("../controllers/famousquote.controller");
    
    router.post("/", await famousQuote.createFamousQuote);

    router.get("/:id", famousQuote.findFamousQuoteById);

    router.delete("/:id", famousQuote.deleteQuoteById);

    app.use('/api/v1/generate-changing-life-quote', router)
}