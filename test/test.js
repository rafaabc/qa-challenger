//This test will fail with firefox browser because of an invalid certificate error

const assert = require("chai").assert;

describe('checks "https://getlabor.com.br/" homepage opens successfully', function() {
  it("should have the right title", function() {
    //Open the homepage for Frontier Communications
    browser.url("");

    //Gets the title of the page once it loads and calls it "title"
    var title = browser.getTitle();

    //Verifies that the returned title matches as expected
    assert.equal(title, "Labor - Controle de Horas");

    //Prints the title to the console
    console.log("Title of homepage is: " + title);
  });
});
//teste