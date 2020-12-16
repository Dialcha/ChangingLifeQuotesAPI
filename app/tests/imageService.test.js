const assert = require("chai").assert;
const getImageUrl = require("../services/getImageUrl.service");

describe("Tests getImageUrl service", function() {
    it("Get an url image", function() {
        const result = getImageUrl('La pelota no se mancha', 'Maradona')
        console.log(result);
        return result
    });
}); 

