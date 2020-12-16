module.exports = async app => {

    const famousQuote = require("../controllers/famousquote.controller");
    let router = require('express').Router();

    router.get("/", await famousQuote.saveFamousQuote);

    app.use('api/v1/generate-changing-life-quote', router);
}