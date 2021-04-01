// var webdriver = require('selenium-webdriver');
// var assert = require('chai').assert;
// var { Builder, By } = require("selenium-webdriver");

// describe("Testing Scholars Project", function () {
//     this.timeout(5 * 1000 * 60);
//     var driver = new webdriver.Builder()
//         .forBrowser('chrome')
//         .build();

//     before(function setupWebdriver(done) {
//         driver.get("file:///C:/Users/oemma/mocha_test/Dufuna-Fem/submissions/desolaOluseye/HTML/productPage.html").then(done)
//     });

//     it("test case: check if Price is present", async () => {
//         const element = await driver.findElement(By.css("body"));
//         const text = await element.getText();
//         assert.include(text, "Price", `Ensure Price is present`);
//     });

//     it("test case: check if Description is present", async () => {
//         const element = await driver.findElement(By.css("body"));
//         const text = await element.getText();
//         assert.include(text, "DESCRIPTION", `Ensure DESCRIPTION is present`);
//     });

//     it('test case: assert image amount is 2', async () => {
//         const images = await driver.findElements(By.css('img'));
//         const size = images.length
//         assert.equal(size, 2, `Amount of images on the page not equal to 2`);
//     });

//     it('test case: ordered list available', async function () {
//         const list = (await driver).findElements(webdriver.By.id('ol'));
//         assert.notStrictEqual(list.length, 0, 'No ordered list on this page');
//     });
// });

// var webdriver = require('selenium-webdriver');
// var assert = require('chai').assert;
// var { Builder, By } = require("selenium-webdriver");

// describe("Testing Scholars Project", function () {
//     this.timeout(5 * 1000 * 60);
//     var driver = new webdriver.Builder()
//         .forBrowser('chrome')
//         .build();

//     before(function setupWebdriver(done) {
//         driver.get("file:///C:/Users/oemma/mocha_test/Dufuna-Fem/submissions/modupeAdeOnojobi/html-forms/contact.html").then(done)
//     });
//     it('test case: assert 4 input fields are present', async () => {
//         const images = await driver.findElements(By.css('input'));
//         const size = images.length

//         assert.equal(size, 4, `Ensure you have all the input fields in the order stated in the task criteria`);
//     });

//     it('test case: Full Name label is present', async () => {
//         const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
//         const text = await name.getText();
//         assert.equal(text, "Full Name", `Ensure "Full Name" label is present`);

//     });

//     it('test case: Email label is present', async () => {
//         const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
//         const text = await name.getText();
//         assert.equal(text, "Email", `Ensure "Email" label is present`);

//     });

//     it('test case: Subject label is present', async () => {
//         const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
//         const text = await name.getText();
//         assert.equal(text, "Subject", `Ensure "Subject" label is present`);
//     });

//     it('test case: Message label is present', async () => {
//         const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("label")));
//         const text = await name.getText();
//         assert.equal(text, "Message", `Ensure "Message" label is present`);
//     });
// }); 

var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var { Builder, By } = require("selenium-webdriver");

describe("Testing Scholars Project", function () {
    this.timeout(5 * 1000 * 60);
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    before(function setupWebdriver(done) {
        driver.get("file:///C:/Users/oemma/mocha_test/Dufuna-Fem/submissions/modupeAdeOnojobi/html-forms/sign-up.html").then(done)
    });
    it('test case: assert 7 input fields are present', async () => {
        const images = await driver.findElements(By.css('input'));
        const size = images.length

        assert.equal(size, 9, `Ensure you have all the input fields in the order stated in the task criteria`);
    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "Contact Us", `Ensure "Contact Us" label is present`);

    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "About Us", `Ensure "About Us" is present`);

    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("footer")));
        const text = await name.getText();
        assert.include(text, "Terms and Conditions", `Ensure "Terms and Conditions" is present`);

    });

    it('test case: First Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "First Name", `Ensure "First Name" label is present`);

    });

    it('test case: Last Name label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Last Name", `Ensure "Last Name" label is present`);

    });

    it('test case: Other names label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Other Names", `Ensure "Other names" label is present`);
    });

    it('test case: Email Address label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Email Address", `Ensure "Email Address" label is present`);
    });

    it('test case: Password label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Password", `Ensure "Password" label is present`);
    });

    it('test case: Confirm Password label is present', async () => {
        const name = driver.wait(webdriver.until.elementLocated(webdriver.By.css("form")));
        const text = await name.getText();
        assert.include(text, "Confirm Password", `Ensure "Confirm Password" label is present`);
    });
});

    
