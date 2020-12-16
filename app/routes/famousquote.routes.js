module.exports = async app => {
    let router = require("express").Router();

    const famousQuote = require("../controllers/famousquote.controller");
    
    router.get("/", await famousQuote.createFamousQuote);

    app.use('/api/v1/generate-changing-life-quote', router)
}