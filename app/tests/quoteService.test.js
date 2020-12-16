const assert = require("chai").assert;
const getRandomQuote = require("../services/getRandomQuote.service");

describe("Tests getRandomQuote service", function() {
    it("Get an famous random quote", async function() {
        const result = await getRandomQuote()
        console.log(result);
        return result
    });
}); 
